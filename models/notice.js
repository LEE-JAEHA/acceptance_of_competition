const Sequelize = require('sequelize');
const db = require('../database/database');

const notice = db.define('receipt', {
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

module.exports = notice;