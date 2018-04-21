function Pet(name, breed, location, latitude, longitude){
    this.data.Name = name || ""
    this.data.Breed = breed || ""
    this.data.Location = location || ""
    this.data.Latitude = latitude || ""
    this.data.Longitude = longitude || ""
}

function Pet(data){
    this.data = data;
}

Pet.prototype.fromRequest = (requestBody) => {
    this.data.name = requestBody.Name;
    this.data.breed = requestBody.breed;
    this.data.location = requestBody.location;
    this.data.longitude = requestBody.latitude;
    this.data.latitude = requestBody.longitude;
}

module.exports = Pet;