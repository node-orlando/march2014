console.log('\n');

// Built on the Knex SQL query builder
// I'm going to deeply, deeply and gladly
// disappoint you today if you are expecting
// too see SQL. We are not.

// Bookshelf is a javascript ORM for Node.js,
// built on the Knex SQL query builder. Featuring both promise based and
// traditional callback interfaces, it extends the Model & Collection patterns
// of Backbone.js, providing transaction support, eager/nested-eager relation
// loading, polymorphic associations, and support for one-to-one, one-to-many,
// and many-to-many relations.

// It is designed to work well with PostgreSQL, MySQL, and SQLite3.
// When the app starts
var Bookshelf = require('bookshelf'),
    _ = require('underscore');

Bookshelf.PG = Bookshelf.initialize({

  client: 'pg',

  connection: {
    database: 'node_episodes'
  }
});

// elsewhere, to use the client
var Bookshelf = require('bookshelf').PG;

//https://github.com/tgriesser/bookshelf/blob/master/test/integration/collection.js

/*
// There's Models and Collections
// This is a Model
var Episode = Bookshelf.Model.extend({});

// Next Slide
var Episode = Bookshelf.Model.extend({
  tableName: 'episodes'
});
/*

titles = ['Pilot', 'Node 101', 'Intro to Grunt', 'Using Express'];
// TODO: loop and create.

var Episode = Bookshelf.Model.extend({
  tableName: 'episodes'
});

var episode = new Episode({
  title: 'Using Express'
});

episode.save().then(function(m){
  console.log(m);
})


*/

function printTitle(episodes){
  return _.map(episodes, function(episode){
    console.log('Title: ' + episode.get('title'));
  });
}

var Episodes = Bookshelf.Collection.extend({
  tableName: 'episodes'
});

Episodes.forge().fetch().then(function(result){
  console.log(result.models);
});

var Episode = Bookshelf.Model.extend({
  tableName: 'episodes'
});

var episodes = Bookshelf.Collection.forge([],
  { model: Episode });
episodes.fetch().then(function(result){
  console.log(result.models);
});

var episodes = Episode.collection();
episodes.fetch().then(function(result){
  console.log(result.models);
});
