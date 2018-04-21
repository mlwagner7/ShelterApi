var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Shelter';

exports.ExecuteQuery = (query, callback) => {
    var client = new pg.Client(connectionString);
    client.connect();

    client.query(query)
        .then(res => callback(res.rows))
        .catch(e => callback(e))    
}
