const Sequelize = require('sequelize');
const db = require('../database/database');

const receipt = db.define('receipt', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    belong: { // 소속
        type: Sequelize.STRING(500)
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.email,
        allowNull: false
    },
    work: { // 작품 제목
        type: Sequelize.TEXT,
        allowNull: false
    },
    attachFile: { // 작품 첨부, 작품은 DATABASE에 저장하는 것이 아닌 서버에 저장하고 DATABASE에는 해당 작품의 경로와 이름을 저장할것임.
        type: Sequelize.STRING
    }
},
{
    indexes: [
        {
            unique: false,
            fields: ['name', 'phone', 'email']
        }
    ]
})


// CREATE TABLE IF NOT EXISTS
db.sync();

module.exports = receipt;