const express = require('express')
const app = express();
const morgan = require('morgan')
const layout = require('./views/layout.js')

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded( { extended: false}));

app.get('/', (req, res) => {

  res.send(layout('hello world'))
})





const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})

