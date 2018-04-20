'use strict';

var pg = require('pg');
var path = require('path');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Shelter';

exports.List_Pets = (req, res) => {
    var client = new pg.Client(connectionString);
    client.connect();

    var query = client.query('SELECT * FROM petdetails ORDER BY id ASC;',
        (err, results) => {
            if(err){
                console.error(err.message);
            }
            if(results){
                console.log(results);
                client.end();
                return res.json(results.rows);
            }
    });
};

exports.Get_Pet = (req, res) => {
    var client = new pg.Client(connectionString);
    client.connect();

    var petId = req.params.petId;

    var query = {
        name: 'Get-Pet-ById',
        text: 'SELECT * FROM petdetails WHERE Id = $1',
        values: [petId]
    }

    client.query(query, (err, results) => {
        if(err){
            console.error(err.message);
        }
        if(results){
            console.log(results);
            client.end();
            return res.json(results.rows);
        }
    });
}

exports.Create_Pet = (req, res) => {
    var client = new pg.Client(connectionString);
    client.connect();

    var petDetails = req.body;

    console.log(petDetails);

    var query = {
        name: 'Create-New-Pet',
        text: 'INSERT INTO PetDetails VALUES (nextval(\'petdetails_id_seq\') , $1, $2, $3, $4, $5)',
        values: [petDetails.Name, petDetails.Breed, petDetails.Location, petDetails.Latitude, petDetails.Longitude]
    }

    console.log(query);

    client.query(query, (err, results) => {
        if(err){
            console.error(err.message);
        }
        if(results){
            console.log(results);
            client.end();
            return res.json(results.rows);
        }
    });
}