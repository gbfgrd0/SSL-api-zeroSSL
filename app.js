const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.get('/.well-known/pki-validation/<arquivo>.txt', (req, res) => {
  const filePath = path.join(__dirname, '<arquivo>.txt');
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}`));

// Obs: o arquivo de texto para a confirmação deve estar no mesmo diretório
