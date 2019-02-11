const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res)=> {
  const data = [
    {user: '123', name: 'Eyad'},
    {user: '1515', name: 'Aman'},
    {user: '1231', name: 'Tejaswini'}
  ]
  
  res.status(200).json(data);
})

module.exports = router;