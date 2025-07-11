import  app  from './src/server.js';

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});