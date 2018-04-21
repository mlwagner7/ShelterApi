exports.GetAllPetsQuery = () => {
     var query = {
        name: 'Get-Pets',
        text: 'SELECT * FROM petdetails ORDER BY id ASC;'
    }
    return query;
};

exports.GetPetByIdQuery = (id) => {
    var query = {
    name: 'Get-Pet-ById',
    text: 'SELECT * FROM petdetails WHERE Id = $1',
    values: [id]}
    return query;
};

exports.DoesPetExistQuery = (name, breed) => {
    var query = {
    name: 'Does-Pet-Exist',
    text: 'SELECT id FROM petdetails WHERE Name = $1 and Breed= $2',
    values: [name, breed]}
    return query;
};

exports.CreateNewPetQuery = (Pet) => {    
    var query = {
        name: 'Create-New-Pet',
        text: 'INSERT INTO PetDetails VALUES (nextval(\'petdetails_id_seq\') , $1, $2, $3, $4, $5)',
        values: [Pet.Name, Pet.Breed, Pet.Location, Pet.Latitude, Pet.Longitude]
    }
    return query;
}