'use strict';

module.exports = function(app) {
    var Pets = require('../controllers/PetsController');
  
    app.route('/pets')
      .get(Pets.List_Pets)
      .post(Pets.Create_Pet);

    app.route('/pets/:petId')
      .get(Pets.Get_Pet)
  };