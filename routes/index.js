var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('views/index.html', { root: 'public' });
});

router.get('/about', function (req, res, next) {
  res.sendFile('views/about.html', { root: 'public' });
})
router.get('/music', function (req, res, next) {
  res.sendFile('views/music.html', { root: 'public' });
})
router.get('/writing', function (req, res, next) {
  res.sendFile('views/writing.html', { root: 'public' });
})

router.get('/drama', function (req, res, next) {
  res.sendFile('views/drama.html', { root: 'public' });
})
module.exports = router;
