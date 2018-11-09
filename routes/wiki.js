const router = require('express').Router();
const { addPage, wikiPage, main } = require('../views');
const { Page, User } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const allPages = await Page.findAll();

    res.send(main(allPages));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const page = new Page({
      title: req.body.title,
      content: req.body.title,
    });

    const newUser = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    page.setAuthor = newUser;
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    next(error);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const foundSlug = await Page.findOne({
      where: { slug: req.params.slug },
    });
    res.send(wikiPage(foundSlug));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
