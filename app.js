const morgan = require('morgan');
const express = require('express');
const main = require('./views/main');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  console.log('hello world');
  res.send(main(''));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
