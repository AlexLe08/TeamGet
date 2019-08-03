// Create an Express server that can respond to requests for teams information
//Get /teams- returns full list of teams
// Get/teams/X - returns team with their ID, where X is the ID number
// Get/teams/ABBR - returns team associated with abbreviation

let express = require('express')
let teams = require('./teams.json');
let bodyParser = require('body-parser')

let app = express();

app.get("/teams", (request,response) => {
    response.send(teams)
})


// returns team with the same EyeD or same ABBR
app.get("/teams/:EyeD", (request,response) => {
    if (Number(EyeD) === teams.id) {
        return true
    }else{
        return request.param;EyeD === teams.abbr 
    }
       
})

app.use(bodyParser.json())
// adds a json formatted team to the list of teams
app.post('/teams', (request,response) => {
    let 
})

app.all('*', (request,response) => {
    response.send("Error")
})
