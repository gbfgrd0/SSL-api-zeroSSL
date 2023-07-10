const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.get('/.well-known/pki-validation/0C583F7B328B7F4A39F7518BF379F4EB.txt', (req, res) => {
  const filePath = path.join(__dirname, '0C583F7B328B7F4A39F7518BF379F4EB.txt');
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}`));
