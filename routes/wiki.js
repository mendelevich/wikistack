const router = require('express').Router();
const { addPage } = require('../views');
const { Page } = require("../models");



router.get('/', async (req, res, next) => {
  try {
    res.send('hello world');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {

  const title = req.body.title
  const content = req.body.content

  const page = new Page({
    title: title,
    content: content
  })
  try {
    await page.save();
    res.redirect('/');
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
