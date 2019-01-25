const Sequelize = require('sequelize');
const config = require('../config/config.json')

console.log(config);

const db = new Sequelize(config.database, config.databaseUser, config.databasePassword, {
    host: config.databaseHost,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db; //config.json 에서 데이터베이스 configuration을 읽어들여서 연결하고 모듈화한다.