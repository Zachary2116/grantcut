const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5174;
app.use(cors());
app.use(bodyParser.json());

const emails = []; // Temporary storage. Use a database in production.

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  emails.push(email); // Save the email. Replace this with database logic.
  console.log(`New email subscribed: ${email}`);
  res.status(200).json({ message: 'Subscription successful!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});