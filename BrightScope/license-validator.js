/**
 * OSINT 2.1 Extension - License Key Validator
 *
 * Handles premium license key validation and feature gating
 * License key format: OSINT-PRO-{UUID}-{CHECKSUM}
 * Example: OSINT-PRO-8f4a2b1c-9d3e-4a5f-b1c2-A1B2
 */

/**
 * Validate a license key
 * @param {string} licenseKey - The license key to validate
 * @returns {Promise<{valid: boolean, error?: string}>}
 */
async function validateLicenseKey(licenseKey) {
  if (!licenseKey || typeof licenseKey !== 'string') {
    return { valid: false, error: 'Invalid license key format' };
  }

  // Trim whitespace
  licenseKey = licenseKey.trim();

  // License key format: OSINT-PRO-{UUID}-{CHECKSUM}
  // UUID format: 8-4-4-4-4 hex characters
  // CHECKSUM: 4 hex characters
  const regex = /^OSINT-PRO-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9A-F]{4}$/i;

  if (!regex.test(licenseKey)) {
    return { valid: false, error: 'License key format is invalid' };
  }

  // Extract UUID and checksum
  const parts = licenseKey.split('-');
  const uuid = `${parts[2]}-${parts[3]}-${parts[4]}-${parts[5]}`;
  const checksum = parts[6];

  // Validate checksum
  const expectedChecksum = calculateChecksum(uuid);

  if (expectedChecksum.toUpperCase() !== checksum.toUpperCase()) {
    return { valid: false, error: 'License key is invalid or corrupted' };
  }

  // Optional: Check against revoked keys list
  const isRevoked = await checkIfRevoked(licenseKey);
  if (isRevoked) {
    return { valid: false, error: 'License key has been revoked' };
  }

  // Store premium status
  await chrome.storage.local.set({
    isPremium: true,
    licenseKey: licenseKey,
    licenseActivatedAt: Date.now()
  });

  return { valid: true };
}

/**
 * Calculate checksum for a UUID
 * @param {string} uuid - UUID to checksum
 * @returns {string} - 4-character hex checksum
 */
function calculateChecksum(uuid) {
  let hash = 0;
  for (let i = 0; i < uuid.length; i++) {
    const char = uuid.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const hex = Math.abs(hash).toString(16).toUpperCase();
  return hex.substring(0, 4).padStart(4, '0');
}

/**
 * Check if license key is revoked
 * @param {string} licenseKey - License key to check
 * @returns {Promise<boolean>}
 */
async function checkIfRevoked(licenseKey) {
  // Future enhancement: Check against a revoked keys list
  // Could be a local list or API call to server

  // For now, return false (no revoked keys)
  return false;
}

/**
 * Generate a valid license key (for development/testing only)
 * In production, keys should be generated server-side
 * @returns {string}
 */
function generateLicenseKey() {
  // Generate random UUID
  const uuid = crypto.randomUUID();

  // Calculate checksum
  const checksum = calculateChecksum(uuid);

  return `OSINT-PRO-${uuid}-${checksum}`;
}

/**
 * Check if current user has premium access
 * @returns {Promise<boolean>}
 */
async function isPremiumUser() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['isPremium'], (result) => {
      resolve(result.isPremium === true);
    });
  });
}

/**
 * Deactivate premium (remove license)
 * @returns {Promise<void>}
 */
async function deactivatePremium() {
  await chrome.storage.local.set({
    isPremium: false,
    licenseKey: null,
    licenseActivatedAt: null
  });
}

/**
 * Get premium feature limits
 * @param {string} feature - Feature name
 * @returns {Object} - {free: number, premium: number}
 */
function getFeatureLimits(feature) {
  const limits = {
    templates: { free: 5, premium: 500 },
    customAreas: { free: 3, premium: 10 },
    intelligenceTypes: { free: 8, premium: 12 }, // 8 base + 4 premium
    promptHistory: { free: 0, premium: 100 },
    autoInject: { free: false, premium: true }
  };

  return limits[feature] || { free: 0, premium: 0 };
}

/**
 * Check if user can access a feature
 * @param {string} feature - Feature name
 * @param {number} currentUsage - Current usage count
 * @returns {Promise<{allowed: boolean, reason?: string}>}
 */
async function checkFeatureAccess(feature, currentUsage = 0) {
  const isPremium = await isPremiumUser();
  const limits = getFeatureLimits(feature);

  if (isPremium) {
    if (currentUsage >= limits.premium) {
      return {
        allowed: false,
        reason: `Premium limit reached (${limits.premium} max)`
      };
    }
    return { allowed: true };
  }

  // Free user
  if (currentUsage >= limits.free) {
    return {
      allowed: false,
      reason: `Free limit reached (${limits.free} max). Upgrade to Pro for ${limits.premium}.`
    };
  }

  return { allowed: true };
}

/**
 * Get premium status details
 * @returns {Promise<Object>}
 */
async function getPremiumStatus() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['isPremium', 'licenseKey', 'licenseActivatedAt'], (result) => {
      resolve({
        isPremium: result.isPremium || false,
        licenseKey: result.licenseKey || null,
        activatedAt: result.licenseActivatedAt || null,
        activatedDate: result.licenseActivatedAt
          ? new Date(result.licenseActivatedAt).toLocaleDateString()
          : null
      });
    });
  });
}

// Export functions for use in popup.js and background.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateLicenseKey,
    generateLicenseKey,
    isPremiumUser,
    deactivatePremium,
    getFeatureLimits,
    checkFeatureAccess,
    getPremiumStatus
  };
}
