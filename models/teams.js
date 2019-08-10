// Implementing the model for 'teams'

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('teams', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
        },
        location: {
            type: Sequelize.STRING,
        },
        mascot: {
            type: Sequelize.STRING,
        },
        abbreviation: {
            type: Sequelize.STRING,
        },
        conference: {
            type: Sequelize.ENUM('AFC', 'NFC'),
        },
        division: {
            type: Sequelize.ENUM('North', 'South', 'East', 'West'),
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }

    })
})