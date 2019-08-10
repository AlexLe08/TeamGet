// Create an Express server that can respond to requests for teams information
//Get /teams- returns full list of teams
// Get/teams/X - returns team with their ID, where X is the ID number
// Get/teams/ABBR - returns team associated with abbreviation

let express = require('express')
//let teams = require('./teams.json');
let bodyParser = require('body-parser')
let models = require('./models')
let Sequelize = require('sequelize')
let port = 1337

let app = express();

app.get("/teams", (request,response) => {
    models.teams.findAll().then((teams) => {
        response.send(teams)
    })
    //response.send(teams)   //JSON method
})


// returns team with the same EyeD or same ABBR
app.get("/teams/:id", (request,response) => {
    // Sequelize has its version of OR, we use it to filter out id or abbreviation
    models.teams.findAll({
        where: {
          [Sequelize.Op.or]: [{id: request.params.id}, {abbreviation: request.params.id}]
        }
      }).then((teams) => {
          response.send(teams)
      })
    // The hard way
    // models.teams.findOne({
    //     where: {id: request.params.id}
    // }).then((teams) => {
    //     if (Number(id) === teams.id) {
    //         response.send(teams)
    //     }
    //     else{
    //         response.send("Error: id or abbr not working")
    //     }
    // })

    /* JSON method
    if (Number(EyeD) === teams.id) {
        return true
    }else{
        return request.param.EyeD === teams.abbr 
    }
       */
})

app.use(bodyParser.json())
// adds a json formatted team to the list of teams
app.post('/teams', (request,response) => {
    const {location, mascot, abbreviation, conference, division} = request.body
    //Check that inputs are filled and valid
    if (!location || !mascot || !abbreviation || !conference || !division) {
        response.status(400).send('You need the team location, mascot, abbreviation, conference (AFC or NFC), and division (North, South, East, or West)')
    }
    models.teams.create({location, mascot, abbreviation, conference, division}).then((newTeam) => {
        response.status(201).send(newTeam)
    })
    // teams.push(
    //     request.body
    // )

    // console.log("Added " + request.body.abbreviation + " to the list")
    // response.send("Added " + request.body.abbreviation + " to the list")
})


//Otherwise
app.all('*', (request,response) => {
    response.send("Error use /teams or /teams/:id or whatever")
})

app.listen(port, () => {
    console.log("this is my port: " + port)
});