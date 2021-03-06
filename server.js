var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 8080;
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'Hooray! Welcome to our api!'});
});

router.route('/bears').get(function(req, res) {
	
});

app.use('/api', router);

app.listen(port);

console.log('Magic happens on port ' + port);