# ShelterApi
Serves pet related locational information

This api serves resources petaining to pet information

it supports 3 different calls all from the pets uri.
Get /pets - returns full list of pets from postgres db
Get /pets/{id} - returns single pet resource identified by id
POST /pets - Consumes JSON model to create new pet 

This api runs on port 3000
Open npm console and locate the base directory and run 'npm start'