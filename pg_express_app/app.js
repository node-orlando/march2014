/**
 * Module dependencies.
 */

var Bookshelf = require('bookshelf');
global.db = Bookshelf.initialize({
  client: 'pg',
  connection: {
    database: 'node_episodes'
  }
});

var express = require('express');
var routes = require('./routes');
var episode = require('./routes/episode');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(require('connect-method-override-get')('_method'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

app.get('/', routes.index);

app.get('/episodes', episode.list);

/*
app.get('/episodes/new', episode.new);
app.post('/episodes', episode.create);
app.get('/episodes/:id/edit', episode.edit);
app.patch('/episodes/:id', episode.update);
app.del('/episodes/:id', episode.destroy);
*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
