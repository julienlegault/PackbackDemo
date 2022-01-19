import express from 'express';
import { json } from 'body-parser';

import { helloWorldRouter } from './routes/helloworld';
import { reverseStringRouter } from './routes/reverse-words';
import { fibTypeRouter } from  './routes/fib-type';

const app = express();
app.use(json());

app.use(helloWorldRouter);
app.use(reverseStringRouter);
app.use(fibTypeRouter);

app.get('/api', (req, res) => {
  res.status(200).send(req.body);
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
})

app.listen(80, () => {
  console.log('Listening on port 80');
});
