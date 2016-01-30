require('./config');

var
  express = require('express'),
  path    = require('path')
;

var PUBDIR = path.join(__dirname, 'public');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(PUBDIR, 'views'));
app.set('port', process.env.SERVE_PORT);
app.set('ip', process.env.SERVE_IP);

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

app.use(router);
app.use('/', express.static(PUBDIR));

console.log(`Server listening on http://${app.get('ip')}:${app.get('port')}`);
app.listen(app.get('port'), app.get('ip'));
