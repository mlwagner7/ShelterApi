var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Shelter';

var client = new pg.Client(connectionString);

console.log('Create pets table');
var query = client.query(
    'CREATE TABLE IF NOT EXISTS PetDetails (Id SERIAL PRIMARY KEY, Name VARCHAR(40) not null, Breed VARCHAR(40) not null, Location VARCHAR(40) not null, Latitude NUMERIC(9,6), Longitude NUMERIC(9,6))',
    (err, res) => {
        if(err){
            console.error(err.message);
        }
        if(res){
            console.log(res);
        }
    });

console.log('Inserting Pets');
client.connect();
var query = client.query('insert into PetDetails (Name, Breed, Location, Latitude, Longitude)'
                            +' select d.name, d.breed, d.location, d.latitude, d.longitude'
                            +' from ('
                            +' select \'Sir Reginald Corgi-ham\' as Name, \'Corgi\' as Breed, \'Okotoks, Ab\' as Location, 50.729859 as Latitude, -113.994079 as Longitude'
                            +' union all'
                            +' select \'PugG\', \'Pug\', \'Mawsynram, India\', 25.297536, 91.582636'
                            +' union all'
                            +' select \'Gas Pup\', \'Husky\', \'Regina, Sk\', 50.413098, -104.589447) as d '
                            +'where not exists (select Name'
                            +'                  from PetDetails pd'
                            +'                  where pd.Name = d.Name)',
    (err, res) => {
        if(err){
            console.error(err.message);
        }
        if(res){
            console.log(res);
        }
});