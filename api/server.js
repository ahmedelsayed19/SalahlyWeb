const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Proxy endpoint for Salahly API images
app.get('/api/proxy/image/:fileId', async (req, res) => {
  try {
    const fileId = req.params.fileId;
    const imageUrl = `http://api.salahly.demos.salahly.com/api/FileSystem/file/download/${fileId}`;
    
    console.log(`Proxying image request for file ID: ${fileId}`);
    
    // Fetch the image from the original API
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'image/*',
        'User-Agent': 'Salahly-Proxy-Server/1.0'
      },
      timeout: 10000
    });
    
    // Set appropriate headers
    res.set({
      'Content-Type': response.headers['content-type'] || 'image/jpeg',
      'Content-Length': response.data.length,
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    });
    
    // Send the image data
    res.send(response.data);
    
  } catch (error) {
    console.error(`Error proxying image ${req.params.fileId}:`, error.message);
    res.status(500).json({ 
      error: 'Failed to fetch image',
      fileId: req.params.fileId,
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'Salahly Image Proxy',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Salahly Image Proxy Server running on http://localhost:${PORT}`);
  console.log(`📸 Proxy images via: http://localhost:${PORT}/api/proxy/image/{fileId}`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});
