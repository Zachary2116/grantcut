// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Serve static files from the React build directory
// app.use(express.static(path.join(__dirname, 'build')));

// // Serve index.html for all unknown routes (supports React Router)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all unknown routes (supports React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
