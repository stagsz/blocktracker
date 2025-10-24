/**
 * BlockTracker - Main Application Logic
 *
 * This file controls the UI and orchestrates data fetching
 */

import web3Service from './web3-service.js';
import {
  isValidAddress,
  shortenAddress,
  formatDate,
  formatNumber,
  copyToClipboard,
  escapeHTML,
  generateAIPrompt
} from '../utils/helpers.js';

/**
 * Application State
 */
const state = {
  currentAnalysisType: 'wallet', // 'wallet', 'contract', or 'nft'
  currentData: null
};

/**
 * DOM Elements
 */
const elements = {
  // Analysis type buttons
  analysisButtons: document.querySelectorAll('[data-type]'),

  // Input section
  inputTitle: document.getElementById('input-title'),
  addressInput: document.getElementById('address-input'),
  analyzeBtn: document.getElementById('analyze-btn'),
  exampleButtons: document.querySelectorAll('[data-address]'),

  // Status displays
  loading: document.getElementById('loading'),
  error: document.getElementById('error'),
  errorMessage: document.getElementById('error-message'),
  results: document.getElementById('results'),

  // Result cards
  walletResults: document.getElementById('wallet-results'),
  contractResults: document.getElementById('contract-results'),
  nftResults: document.getElementById('nft-results'),

  // Wallet data fields
  walletAddress: document.getElementById('wallet-address'),
  walletBalance: document.getElementById('wallet-balance'),
  walletTxCount: document.getElementById('wallet-tx-count'),
  walletFirstTx: document.getElementById('wallet-first-tx'),
  tokenList: document.getElementById('token-list'),
  transactionList: document.getElementById('transaction-list'),

  // Contract data fields
  contractAddress: document.getElementById('contract-address'),
  contractName: document.getElementById('contract-name'),
  contractCompiler: document.getElementById('contract-compiler'),
  contractVerified: document.getElementById('contract-verified'),

  // NFT data fields
  nftName: document.getElementById('nft-name'),
  nftSymbol: document.getElementById('nft-symbol'),
  nftSupply: document.getElementById('nft-supply'),

  // AI prompt
  aiPrompt: document.getElementById('ai-prompt'),
  copyPromptBtn: document.getElementById('copy-prompt-btn')
};

/**
 * Initialize Application
 */
async function init() {
  console.log('🚀 BlockTracker initializing...');

  // Set up event listeners
  setupEventListeners();

  // Initialize Web3 service
  try {
    await web3Service.initialize();
    console.log('✅ Application ready!');
  } catch (error) {
    showError(`Failed to initialize: ${error.message}`);
  }
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  // Analysis type selection
  elements.analysisButtons.forEach(btn => {
    btn.addEventListener('click', () => handleAnalysisTypeChange(btn.dataset.type));
  });

  // Analyze button
  elements.analyzeBtn.addEventListener('click', handleAnalyze);

  // Enter key in input field
  elements.addressInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  });

  // Example address buttons
  elements.exampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.addressInput.value = btn.dataset.address;
      handleAnalyze();
    });
  });

  // Copy prompt button
  elements.copyPromptBtn.addEventListener('click', handleCopyPrompt);
}

/**
 * Handle analysis type change (Wallet, Contract, NFT)
 */
function handleAnalysisTypeChange(type) {
  state.currentAnalysisType = type;

  // Update active button
  elements.analysisButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });

  // Update input title
  const titles = {
    wallet: 'Wallet Address',
    contract: 'Smart Contract Address',
    nft: 'NFT Collection Address'
  };
  elements.inputTitle.textContent = titles[type];

  // Clear previous results
  hideResults();
  hideError();
}

/**
 * Handle analyze button click
 */
async function handleAnalyze() {
  const address = elements.addressInput.value.trim();

  // Validate input
  if (!address) {
    showError('Please enter an Ethereum address');
    return;
  }

  if (!isValidAddress(address)) {
    showError('Invalid Ethereum address format. Must start with 0x and be 42 characters long.');
    return;
  }

  // Clear previous state
  hideError();
  hideResults();
  showLoading();

  try {
    // Fetch data based on analysis type
    let data;
    switch (state.currentAnalysisType) {
      case 'wallet':
        data = await analyzeWallet(address);
        displayWalletResults(data);
        break;
      case 'contract':
        data = await analyzeContract(address);
        displayContractResults(data);
        break;
      case 'nft':
        data = await analyzeNFT(address);
        displayNFTResults(data);
        break;
    }

    // Store data and show results
    state.currentData = data;
    showResults();
    generateAndDisplayPrompt(data, state.currentAnalysisType);

  } catch (error) {
    console.error('Analysis error:', error);
    showError(error.message);
  } finally {
    hideLoading();
  }
}

/**
 * Analyze a wallet address
 */
async function analyzeWallet(address) {
  console.log(`Analyzing wallet: ${address}`);

  // Fetch wallet info
  const walletInfo = await web3Service.getWalletInfo(address);

  // Fetch recent transactions
  const transactions = await web3Service.getRecentTransactions(address, 10);

  // Fetch ERC-20 token balances
  const tokens = await web3Service.getTokenBalances(address);

  // Try to get ENS name
  const ensName = await web3Service.getENSName(address);

  return {
    ...walletInfo,
    ensName,
    transactions,
    tokens,
    firstTx: transactions.length > 0 ? transactions[transactions.length - 1].timestamp : null
  };
}

/**
 * Analyze a smart contract
 */
async function analyzeContract(address) {
  console.log(`Analyzing contract: ${address}`);

  const contractInfo = await web3Service.getContractInfo(address);
  return contractInfo;
}

/**
 * Analyze an NFT collection
 */
async function analyzeNFT(address) {
  console.log(`Analyzing NFT collection: ${address}`);

  const nftInfo = await web3Service.getNFTInfo(address);
  return nftInfo;
}

/**
 * Display wallet analysis results
 */
function displayWalletResults(data) {
  // Display basic info
  elements.walletAddress.textContent = data.ensName || shortenAddress(data.address);
  elements.walletBalance.textContent = data.balance;
  elements.walletTxCount.textContent = formatNumber(data.txCount);
  elements.walletFirstTx.textContent = data.firstTx ? formatDate(data.firstTx) : 'Unknown';

  // Display token holdings
  if (data.tokens && data.tokens.length > 0) {
    elements.tokenList.innerHTML = data.tokens
      .map(token => `
        <div class="token-item">
          <div class="token-info">
            <div class="token-name">${escapeHTML(token.name)}</div>
            <div class="token-symbol">${escapeHTML(token.symbol)}</div>
          </div>
          <div class="token-balance">${token.balance} ${escapeHTML(token.symbol)}</div>
        </div>
      `).join('');
  } else {
    elements.tokenList.innerHTML = '<p>No ERC-20 tokens found or still loading...</p>';
  }

  // Display transactions
  if (data.transactions && data.transactions.length > 0) {
    elements.transactionList.innerHTML = data.transactions
      .slice(0, 5) // Show only 5 most recent
      .map(tx => `
        <div class="transaction-item">
          <p><strong>Hash:</strong> ${shortenAddress(tx.hash, 10, 8)}</p>
          <p><strong>From:</strong> ${shortenAddress(tx.from)}</p>
          <p><strong>To:</strong> ${shortenAddress(tx.to)}</p>
          <p><strong>Value:</strong> ${tx.value}</p>
          <p><strong>Date:</strong> ${formatDate(tx.timestamp)}</p>
          ${tx.isError ? '<p style="color: var(--danger-color);"><strong>Status:</strong> Failed</p>' : ''}
        </div>
      `).join('');
  } else {
    elements.transactionList.innerHTML = '<p>No recent transactions found.</p>';
  }

  // Show wallet results card
  elements.walletResults.classList.remove('hidden');
  elements.contractResults.classList.add('hidden');
  elements.nftResults.classList.add('hidden');
}

/**
 * Display contract analysis results
 */
function displayContractResults(data) {
  elements.contractAddress.textContent = shortenAddress(data.address);
  elements.contractName.textContent = data.name;
  elements.contractCompiler.textContent = data.compiler;
  elements.contractVerified.textContent = data.verified ? '✅ Yes' : '❌ No';

  // Show contract results card
  elements.contractResults.classList.remove('hidden');
  elements.walletResults.classList.add('hidden');
  elements.nftResults.classList.add('hidden');
}

/**
 * Display NFT analysis results
 */
function displayNFTResults(data) {
  elements.nftName.textContent = data.name;
  elements.nftSymbol.textContent = data.symbol;
  elements.nftSupply.textContent = formatNumber(data.totalSupply);

  // Show NFT results card
  elements.nftResults.classList.remove('hidden');
  elements.walletResults.classList.add('hidden');
  elements.contractResults.classList.add('hidden');
}

/**
 * Generate and display AI prompt
 */
function generateAndDisplayPrompt(data, type) {
  const prompt = generateAIPrompt(data, type);
  elements.aiPrompt.textContent = prompt;
}

/**
 * Handle copy prompt button
 */
async function handleCopyPrompt() {
  const prompt = elements.aiPrompt.textContent;
  const success = await copyToClipboard(prompt);

  if (success) {
    elements.copyPromptBtn.textContent = '✅ Copied!';
    setTimeout(() => {
      elements.copyPromptBtn.textContent = 'Copy Prompt';
    }, 2000);
  } else {
    elements.copyPromptBtn.textContent = '❌ Failed';
    setTimeout(() => {
      elements.copyPromptBtn.textContent = 'Copy Prompt';
    }, 2000);
  }
}

/**
 * UI State Management
 */
function showLoading() {
  elements.loading.classList.remove('hidden');
}

function hideLoading() {
  elements.loading.classList.add('hidden');
}

function showError(message) {
  elements.errorMessage.textContent = escapeHTML(message);
  elements.error.classList.remove('hidden');
}

function hideError() {
  elements.error.classList.add('hidden');
}

function showResults() {
  elements.results.classList.remove('hidden');
}

function hideResults() {
  elements.results.classList.add('hidden');
}

/**
 * Start the application when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
