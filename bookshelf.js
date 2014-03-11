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
var Bookshelf = require('bookshelf'),
    _ = require('underscore');

Bookshelf.PG = Bookshelf.initialize({

  client: 'pg',

  connection: {
    database: 'node_episodes'
  }
});


var Bookshelf = Bookshelf.PG;

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
})*/

function printTitle(episodes){
  return _.map(episodes, function(episode){
    console.log('Title: ' + episode.get('title'));
  });
}

var Episodes = Bookshelf.Collection.extend({tableName: 'episodes'});
Episodes.forge().reset({});
Episodes.forge().fetch().then(function(result){
  printTitle(result.models);
  console.log('\n')
});

var Episode = Bookshelf.Model.extend({
  tableName: 'episodes'
});

var postsCollection = Bookshelf.Collection.forge([], { model: Episode });
postsCollection.fetch().then(function(result){
  printTitle(result.models);
  console.log('\n')
});

//The query method is used to tap into the underlying Knex query builder
//instance for the current collection.
var postsCollection = Bookshelf.Collection.forge([], { model: Episode });
postsCollection.query('where', {title: 'Pilot'})
  .fetch().then(function(result){
    console.log('With Query:')
    printTitle(result.models);
    console.log('\n')
});
