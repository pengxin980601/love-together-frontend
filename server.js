const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Serve static files from dist directory
app.use(express.static(distPath, {
  index: 'index.html',
  dotfiles: 'ignore'
}));

// Explicitly serve index.html for root and SPA routes
app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Love Together frontend running on port ${PORT}`);
  console.log(`Serving static files from: ${distPath}`);
});
