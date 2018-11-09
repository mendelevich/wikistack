const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout.js');
const models = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layout('hello world'));
});

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

const init = async () => {
  await models.db.sync({ force: true });

  const PORT = 1337;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
