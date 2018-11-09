const router = require('express').Router();
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  try {
    res.send('hello world');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.send(console.log('working'));
  } catch (error) {
    next(error);
  }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
