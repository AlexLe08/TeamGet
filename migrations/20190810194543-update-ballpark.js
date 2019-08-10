'use strict';
let models = require("../models")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn('teams','ballpark', {type: Sequelize.STRING, defaultValue: ''}).then(() => {
     return models.teams.bulkCreate( [
      {abbreviation: "ARI",ballpark: "State Farm Stadium"},
      {abbreviation: "ATL",ballpark: "Mercedes-Benz Stadium"},
      {abbreviation: "BAL",ballpark: "M&T Bank Stadium"},
      {abbreviation: "BUF",ballpark: "New Era Field"},
      {abbreviation: "CAR",ballpark: "Bank of America Stadium"},
      {abbreviation: "CHI",ballpark: "Soldier Field"},
      {abbreviation: "CIN",ballpark: "Paul Brown Stadium"},
      {abbreviation: "CLE",ballpark: "FirstEnergy Stadium"},
      {abbreviation: "DAL",ballpark: "AT&T Stadium"},
      {abbreviation: "DEN",ballpark: "Broncos Stadium at Mile High"},
      {abbreviation: "DET",ballpark: "Ford Field"},
      {abbreviation: "GB",ballpark: "Lambeau Field"},
      {abbreviation: "HOU",ballpark: "NRG Stadium"},
      {abbreviation: "IND",ballpark: "Lucas Oil Stadium"},
      {abbreviation: "JAX",ballpark: "TIAA Bank Field"},
      {abbreviation: "KC",ballpark: "Arrowhead Stadium"},
      {abbreviation: "LAC",ballpark: "Dignity Health Sports Park"},
      {abbreviation: "LAR",ballpark: "Los Angeles Memorial Coliseum"},
      {abbreviation: "MIA",ballpark: "Hard Rock Stadium"},
      {abbreviation: "MIN",ballpark: "U.S. Bank Stadium"},
      {abbreviation: "NE",ballpark: "Gillette Stadium"},
      {abbreviation: "NO",ballpark: "Mercedes-Benz Superdome"},
      {abbreviation: "NYG",ballpark: "MetLife Stadium"},
      {abbreviation: "NYJ",ballpark: "MetLife Stadium"},
      {abbreviation: "OAK",ballpark: "RingCentral Coliseum"},
      {abbreviation: "PHI",ballpark: "Lincoln Financial Field"},
      {abbreviation: "PIT",ballpark: "Heinz Field"},
      {abbreviation: "SEA",ballpark: "CenturyLink Field"},
      {abbreviation: "SF",ballpark: "Levi's Stadium"},
      {abbreviation: "TB",ballpark: "Raymond James Stadium"},
      {abbreviation: "TEN",ballpark: "Nissan Stadium"},
      {abbreviation: "WSH",ballpark: "FedExField"}
     ], {updateOnDuplicate: ['ballpark'] })
   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn('teams', 'ballpark')
  }
};
