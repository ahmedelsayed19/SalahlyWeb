# Salahly Image Proxy Server

A simple Node.js proxy server to handle CORS issues when loading images from the Salahly API in web browsers.

## Setup

1. **Install Node.js** (if not already installed)
2. **Install dependencies:**
   ```bash
   cd proxy-server
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

## Usage

Once the server is running on `http://localhost:3000`, you can:

- **Proxy images:** `http://localhost:3000/api/proxy/image/{fileId}`
- **Health check:** `http://localhost:3000/health`

### Example:
- Original: `http://api.salahly.demos.salahly.com/api/FileSystem/file/download/2028`
- Proxied: `http://localhost:3000/api/proxy/image/2028`

## Integration with Flutter Web

Update your Flutter web app to use the proxy server URLs instead of direct API calls.

## Development

Run with auto-reload:
```bash
npm run dev
```
