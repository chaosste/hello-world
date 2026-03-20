const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static assets (CSS/JS/images)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints (newsletter signup logs to console)
app.post('/api/newsletter/signup', express.json(), (req, res) => {
  console.log('Newsletter signup:', req.body.email);
  res.json({ success: true, message: 'Thanks! Check your email.' });
});

// Clean URL routes (no .html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/sponsorship', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sponsorship.html'));
});

// Fallback for any other routes (SPA-style or 404)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`EntheoGen running on port ${port}`);
  console.log('Routes: /, /about, /sponsorship');
});