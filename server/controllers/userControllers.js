const sequelize = require('sequelize');
const dbConfig = require('../config/config');
const connection = new sequelize(dbConfig[process.env.ENVIRONMENT || 'development']);

const gebruikers = connection.define('gebruikers', {
    gebruikers_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gebruikers_naam: sequelize.STRING,
    voornaam: sequelize.STRING,
    achternaam: sequelize.STRING,
    email: sequelize.STRING,
    wachtwoord: sequelize.STRING,
    datum_aangemaakt: sequelize.DATE
})

//CREATE
function Create(req, res){
    gebruikers.create({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: req.body.wachtwoord
    }).then(gebruikers => res.json(gebruikers)).catch(error => {
        res.json({ message: error })
    });
}

//READ
function SelectAll(req, res){
    gebruikers.findAll().then(gebruikers => {
        res.json(gebruikers);
    }).catch(error => {
        res.json({message: error});
    });
}

function SelectOne(req, res) {
    gebruikers.findOne({
        where: { gebruikers_id: req.params.gebruikers_id } 
    }).then(gebruikers => res.json(gebruikers)).catch(error => {
        res.json({message: error})
    });
}

//UPDATE
function Update(req, res){
    gebruikers.update({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: req.body.wachtwoord
    }, {
        where: {gebruikers_id : req.body.gebruikers_id}
    }).then(gebruikers => res.json(gebruikers)).catch(error => {
        res.json({message: error})
    });
}

//DELETE
function DeleteOne(req, res){
    gebruikers.destroy({
        where: {gebruikers_id: req.body.gebruikers_id}
    }).then(gebruikers => res.json(gebruikers)).catch(error => {
        res.json({message: error})
    });
}

module.exports = {
    Create,
    SelectAll,
    SelectOne,
    Update,
    DeleteOne
}