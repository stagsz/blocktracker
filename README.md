# OSINT 2.1.1 - Comprehensive OSINT Intelligence System

A sophisticated Open Source Intelligence (OSINT) toolkit for comprehensive intelligence gathering and analysis.

## Features

### 🔍 Intelligence Gathering
- Multi-source intelligence collection
- Automated data discovery and analysis
- Comprehensive reporting capabilities

### 🛠️ Components

#### Agent System
- **osint_agent.py** - Core intelligence gathering agent
- Automated OSINT workflows
- Configurable intelligence collection parameters

#### Browser Extension
- **osint-extension** - Chrome extension for web-based OSINT
- Real-time intelligence injection into web platforms
- Support for ChatGPT, Claude, and Perplexity integration

#### Automation Workflows
- **n8n-workflows** - Pre-built automation workflows
- Streamlined intelligence collection processes
- Integration with popular OSINT platforms

#### Web3 OSINT Tools
- **web3-osint** - Blockchain and cryptocurrency intelligence
- Wallet analysis and tracking
- Smart contract intelligence gathering

### 📊 Intelligence Types Supported
- Geopolitical Analysis
- Corporate Intelligence
- Technical Intelligence
- Financial Intelligence
- Social Media Intelligence
- Web3/Blockchain Intelligence

## Quick Start

1. **Install Dependencies**
   ```bash
   cd agent-system
   pip install -r requirements.txt
   ```

2. **Configure Environment**
   ```bash
   cp agent-system/.env.example agent-system/.env
   # Edit .env with your API keys
   ```

3. **Load Browser Extension**
   - Open Chrome Extensions (chrome://extensions/)
   - Enable Developer Mode
   - Load unpacked extension from `osint-extension/`

4. **Start Web3 OSINT Server**
   ```bash
   cd web3-osint
   npm install
   node server.js
   ```

## Project Structure

```
├── agent-system/          # Core OSINT agent
├── automation/            # N8N automation workflows  
├── osint-extension/       # Browser extension
├── specs/                 # Project specifications
├── src/                   # Source files and reports
├── web3-osint/           # Web3 intelligence tools
└── README.md             # This file
```

## Usage Examples

### Generate Intelligence Reports
```bash
python agent-system/osint_agent.py --target "company_name" --type corporate
```

### Web3 Analysis
Navigate to `http://localhost:3000` after starting the web3-osint server for blockchain intelligence gathering.

### Browser Extension
Use the extension on supported platforms (ChatGPT, Claude, Perplexity) for enhanced OSINT capabilities.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security Note

This toolkit is designed for legitimate OSINT activities. Please ensure compliance with applicable laws and regulations when using these tools.