// When the app starts
var Knex  = require('knex');
Knex.PG = Knex.initialize({
  client: 'pg',
  connection: {
    database: 'node_episodes'
  }
});

// elsewhere, to use the client
var Knex = require('knex').PG;
var episodes = Knex('episodes').select();
episodes.then(function(results) {
  console.log(results);
});