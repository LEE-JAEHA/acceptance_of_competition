const Sequelize = require('sequelize');
const db = require('../database/database');

const notice = db.define('notice', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT
    }
})


// CREATE TABLE IF NOT EXISTS
db.sync();

module.exports = notice;