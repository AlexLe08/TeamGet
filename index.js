// Create an Express server that can respond to requests for teams information
//Get /teams- returns full list of teams
// Get/teams/X - returns team with their ID, where X is the ID number
// Get/teams/ABBR - returns team associated with abbreviation

let express = require('express')
let teams = require('./teams.json');

let app = express();

app.get("/teams", (request,response) => {
    response.send(teams)
})