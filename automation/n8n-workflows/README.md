# OSINT Automation Workflow for n8n

## 🎯 Overview

This n8n workflow automates your OSINT investigation pipeline:
1. **Receives** OSINT prompts from your generator (osint-2.1.1)
2. **Executes** AI-powered investigations using Claude API
3. **Performs** systematic web searches following OSINT methodology
4. **Generates** professional blog posts with findings
5. **Saves** results and commits to Git

## 📐 Workflow Architecture

```
┌──────────────────┐
│  Webhook Trigger │ ← Receives prompt from HTML interface
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Parse Prompt    │ ← Validates and structures prompt data
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Claude Agent    │ ← Main investigation orchestrator
│  (Phase 1-4)     │   • Discovery: Initial reconnaissance
└────────┬─────────┘   • Signals: Pattern identification
         │              • Insights: Deep analysis
         ▼              • Receipts: Evidence documentation
┌──────────────────┐
│  Search Loop     │ ← Iterative search execution
│  - Brave Search  │   Claude requests searches,
│  - Web Scraping  │   receives results, analyzes
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Blog Generator  │ ← Formats findings as blog post
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Save & Commit   │ ← Writes files and commits to Git
└──────────────────┘
```

## 🔧 Setup Requirements

### 1. Install n8n

```bash
# Option A: Using npm
npm install -g n8n

# Option B: Using Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Option C: Desktop app
# Download from https://n8n.io/download
```

### 2. Required API Keys

You'll need these API credentials configured in n8n:

- **Anthropic API Key**: For Claude AI
  - Get from: https://console.anthropic.com/
  - Required for: Main investigation agent
  
- **Brave Search API Key**: For web searches
  - Get from: https://brave.com/search/api/
  - Required for: OSINT discovery phase

### 3. File System Access

n8n needs access to your OSINT directory:
- **Path**: `D:\OBSINT 1.0\osint-2.0\osint-2.1.1\`
- **Permissions**: Read/Write for saving blog posts
- **Git**: Git must be installed and repository initialized

## 📦 Workflow Installation

### Step 1: Import Workflow

1. Open n8n interface (usually `http://localhost:5678`)
2. Click **"Import from File"**
3. Select `osint-automation-workflow.json`
4. The workflow will appear in your canvas

### Step 2: Configure Credentials

**Anthropic API (Claude):**
1. Click on any "HTTP Request" node labeled "Claude API"
2. Under "Credentials", click "Create New"
3. Select "Header Auth"
4. Set:
   - Name: `Anthropic-API-Key`
   - Value: Your API key from Anthropic Console
   - Header Name: `x-api-key`

**Brave Search API:**
1. Click on "HTTP Request" node labeled "Brave Search"
2. Create new credential
3. Select "Header Auth"
4. Set:
   - Name: `Brave-Search-API-Key`
   - Value: Your Brave API key
   - Header Name: `X-Subscription-Token`

### Step 3: Configure File Paths

1. Click "Set Investigation Paths" node
2. Update `basePath` to your directory:
   ```javascript
   basePath: "D:\\OBSINT 1.0\\osint-2.0\\osint-2.1.1\\investigations"
   ```

### Step 4: Activate Workflow

1. Click the toggle in top-right corner
2. Workflow status should show "Active"
3. Copy the webhook URL (you'll need this for the HTML interface)

## 🔗 Integrate with OSINT 2.1 Generator

Add a "Send to Agent" button to your HTML interface:

```javascript
// Add to your src/index.html after prompt generation

async function sendToAgent(promptData) {
  const webhookUrl = 'http://localhost:5678/webhook/osint-investigation';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        promptData: promptData,
        targetName: promptData.targetSpecification.targetName,
        intelligenceType: promptData.intelligenceType,
        timestamp: new Date().toISOString()
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      alert(`Investigation started! ID: ${result.investigationId}`);
      console.log('Investigation tracking:', result);
    }
  } catch (error) {
    console.error('Failed to start investigation:', error);
    alert('Failed to connect to automation agent');
  }
}

// Add button to UI
const sendButton = document.createElement('button');
sendButton.textContent = '🚀 Send to AI Agent';
sendButton.className = 'primary-button';
sendButton.onclick = () => sendToAgent(currentPromptData);
document.getElementById('prompt-actions').appendChild(sendButton);
```

## 🎮 Usage

### Starting an Investigation

1. **Generate Prompt**: Use your OSINT 2.1 HTML interface to create an investigation prompt
2. **Click "Send to AI Agent"**: This triggers the n8n workflow
3. **Monitor Progress**: Watch n8n executions panel for real-time progress
4. **Review Results**: Blog posts are saved to `investigations/{investigation-id}/`

### Workflow Execution Flow

```
User Action → Webhook Receives Prompt → Claude Analyzes
     ↓
Claude Requests Searches → Brave API Calls → Results to Claude
     ↓
Analysis Complete → Blog Generation → File Save → Git Commit
     ↓
Webhook Returns Success → User Notified
```

### Example Timeline

- **Trigger**: Instant
- **Prompt Analysis**: 5-10 seconds
- **Search Execution**: 30-90 seconds (5-15 searches)
- **Blog Generation**: 20-30 seconds
- **Total**: ~2-3 minutes per investigation

## 📊 Monitoring & Debugging

### View Execution History

1. In n8n, click "Executions" in left sidebar
2. See all past investigations with:
   - Status (Success/Error)
   - Duration
   - Input/Output data
   - Error logs if failed

### Common Issues

**"Webhook not responding"**
- Ensure workflow is activated
- Check n8n is running (`http://localhost:5678`)
- Verify webhook URL in HTML code

**"Claude API errors"**
- Check API key is valid
- Verify you have credits in Anthropic account
- Review rate limits

**"Search results empty"**
- Verify Brave Search API key
- Check API quota not exceeded
- Try different search queries

**"File save failed"**
- Check file path permissions
- Ensure directory exists
- Verify disk space
