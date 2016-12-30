var express = require('express');

var app = express();

app.get('/a', function(req,res) {
	res.send('hello');
});


app.listen(process.env.PORT || 1337);
