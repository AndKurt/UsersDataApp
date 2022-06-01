import express from 'express';

const app = express();

app.get('/users', () => {
  console.log('hello');
});

app.listen(5000, () => console.log('Server running'));
