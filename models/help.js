const Sequelize = require('sequelize');
const db = require('../database/database');

const help = db.define('help', {
    helpName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT
    }
})

// CREATE TABLE IF NOT EXISTS
db.sync();

module.exports = help;