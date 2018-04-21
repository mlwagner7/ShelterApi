'use strict';
var queries = require('../Queries/PetQueries');
var dbProvider = require('../Providers/DataAccessProvider');
var Pet = require('../Models/Pet');

exports.List_Pets = (req, res) => {

    var query = queries.GetAllPetsQuery();

    dbProvider.ExecuteQuery(query, (data) => {
        res.json(data)
    });
}

exports.Get_Pet = (req, res) => {
    var petId = req.params.petId;

    var query = queries.GetPetByIdQuery(petId);

    dbProvider.ExecuteQuery(query, (data) => {
        res.json(data)
    });
}

exports.Create_Pet = (req, res) => {
    var newPet = new Pet(req.body);
    var query = queries.CreateNewPetQuery(newPet.data);

    dbProvider.ExecuteQuery(query, (data) => {
        res.json(data)
    });
}