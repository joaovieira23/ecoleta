import express, { response } from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de usuários');

  res.json([
    'João',
    'Maria',
    'Eduarda',
    'Pedro'
  ]);
});

app.listen(3333);