const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

 configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: {
        rejectUnauthorized: false
    }
  };
}else{
  configs = {
    user: 'eugenelim',
    host: '127.0.0.1',
    database: 'project2',
    port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


const allFunction = require('./models/functions');

const poolRoutes = allFunction( pool );

module.exports = {
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  pool:pool,
  poolRoutes
};