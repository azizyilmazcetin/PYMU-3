const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Yeni bir istek geldi');
  if (req.method === 'POST') {
    console.log('Post isteği için istek gönderildi');
  }
  next();
});

app.get('/hello', (req, res) => {
  res.send('Merhaba, GET isteği attınız');
});

app.post('/hello', (req, res) => {
  res.send('Merhaba, POST isteği attınız');
});

app.put('/hello', (req, res) => {
  res.send('Merhaba, PUT isteği attınız');
});

app.delete('/hello', (req, res) => {
  res.send('Merhaba, DELETE isteği attınız');
});

app.listen(1999, () => console.log('app running on port 1999'));
