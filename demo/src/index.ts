import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/helloworld', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/api/helloworld/', (req, res) => {
  res.status(200).send(req.body);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
