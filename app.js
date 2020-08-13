const morgan = require('morgan');
const express = require('express');
const main = require('./views/main');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res, next) => {
  console.log('hello world');
  res.send(main(''));
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

db.authenticate().then(() => {
  console.log('connected to the database');
});
