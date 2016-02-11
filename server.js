var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.NODE_ENV || 8060;
app.engine('handlebars', expressHandlebars({defaultLayout: 'burgers'}));
app.set('view engine', 'handlebars');


app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});
