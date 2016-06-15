var express = require('express');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
//app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
//app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/flexboxgrid/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/bower_components/less-space/dist'));
app.use('/styles', express.static(__dirname + '/styles'));
app.set('port', (process.env.PORT || 5000));


//Routes
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Portfolio - Kasia'
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
