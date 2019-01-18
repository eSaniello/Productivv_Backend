const sequelize = require('sequelize');
const dbConfig = require('../config/config');
const connection = new sequelize(dbConfig[process.env.ENVIRONMENT || 'development']);

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
function Create(req, res){
    taken.create({
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
    taken.findAll().then(gebruikers => {
        res.json(gebruikers);
    }).catch(error => {
        res.json({message: error});
    });
}

function SelectOne(req, res) {
    taken.findOne({
        where: { gebruikers_id: req.params.gebruikers_id } 
    }).then(gebruikers => res.json(gebruikers)).catch(error => {
        res.json({message: error})
    });
}

//UPDATE
function Update(req, res){
    taken.update({
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
    taken.destroy({
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