const router = require('express').Router();
const { addPage } = require("../views")

router.get('/', async (req, res, next) => {
  try{
    res.send('hello world');
  }
  catch (error) {
    next(error);
  }
})


router.post('/', async (req, res, next) => {
  try{
//   const data = await client.query(basequery);
   res.send(console.log('working'));
  //  res.status(200).send('data.rows');
  }
  catch (error) {
    next(error);
  }
})

router.get('/add', async (req, res, next) => {
  try{
//   const data = await client.query(basequery);
   res.send(addPage());
  //  res.status(200).send('data.rows');
  }
  catch (error) {
    next(error);
  }
})

module.exports = router;
