require('./config');

var
  express = require('express')
;

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/build/public/views');
app.set('port', process.env.SERVE_PORT);
app.set('ip', process.env.SERVE_IP);

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

app.use(router);

app.use('/', express.static(__dirname + '/build/public/'));

console.log(`Server listening on http://${app.get('ip')}:${app.get('port')}`);
app.listen(app.get('port'), app.get('ip'));
