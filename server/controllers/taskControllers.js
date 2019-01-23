const sequelize = require('sequelize');
const dbConfig = require('../config/config');
const connection = new sequelize(dbConfig[process.env.ENVIRONMENT || 'development']);

// const gebruikers_model = require('./userControllers');

const taken = connection.define('taken', {
    taak_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gebruikers_id: sequelize.INTEGER,
    titel: sequelize.STRING,
    omschrijving: sequelize.STRING,
    opleverings_datum: sequelize.DATE,
    prioriteit: sequelize.STRING,
    datum_aangemaakt: sequelize.DATE,
    compleet: sequelize.BOOLEAN,
    categorie: sequelize.STRING
})

//CREATE
function Create(){

}

module.exports = {
    Create,
    SelectAll,
    SelectOne,
    Update,
    DeleteOne
}