const Sequelize = require('sequelize');
const db = require('../database/database');

const qna = db.define('qna', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answered: { // 답변 여부
        type: Sequelize.ENUM('N', 'Y'),
        defaultValue: 'N',
        allowNull: false
    }
},{
    indexes: [
        {
            unique: false,
            fields: ['author', 'answered']
        },
        {
            unique: false,
            fields: ['answered']
        }
    ]
})


// CREATE TABLE IF NOT EXISTS
db.sync();

module.exports = qna;