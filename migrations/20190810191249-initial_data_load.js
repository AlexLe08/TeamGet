'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  await queryInterface.bulkInsert('teams', [
    {location: "Worcester", mascot: "Ice Cats", abbreviation: "WIC", conference: "NFC", division: "East"},
    {location: "Boston", mascot: "Red Soxs", abbreviation: "BOS", conference: "NFC", division: "North"},
    {location: "Narnia", mascot: "Wardrobe", abbreviation: "CON", conference: "AFC", division: "West"},
  ])

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.bulkDelete('teams', null, {})
  }
};
