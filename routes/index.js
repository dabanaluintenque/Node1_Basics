var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  // tels you where to go    request get mean you not sending information to the server. '/' mean root
  res.render('index', { title: 'Express' });
});

module.exports = router;

// require means include package
var multer = require('multer');
// will create a folder nme "uploadDir"
var upload = multer({ dest: 'uploadDir' });

/* HTTP Post */
router.post('/upload', upload.single('file_up'), function(req, res) {


  var message = "<br> This will show up in your browser. "


  res.send(message);



});





