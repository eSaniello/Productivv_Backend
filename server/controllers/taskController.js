const db = require('../config/dbConfig');
const User = db.user;
const Taken = db.taken;

exports.createTask = (req, res) => {
    Taken.create({
        titel: req.body.titel,
        omschrijving: req.body.omschrijving,
        opleverings_datum: req.body.opleverings_datum,
        prioriteit: req.body.prioriteit,
        datum_aangemaakt: Date(),
        compleet: false,
        categorie: req.body.categorie,
        fk_gebruikers_id: req.body.fk_gebruikers_id
    }).then(Taken => res.json(Taken)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.findAll = (req, res) => {
    Taken.findAll().then(Taken => res.json(Taken)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.findOne = (req, res) => {
    Taken.findOne({
        where: {
            taak_id: req.params.taak_id
        }
    }).then(Taken => res.json(Taken)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.update = (req, res) => {
    Taken.update({
        titel: req.body.titel,
        omschrijving: req.body.omschrijving,
        opleverings_datum: req.body.opleverings_datum,
        prioriteit: req.body.prioriteit,
        compleet: req.body.compleet,
        categorie: req.body.categorie
    }, {
        where: {
            taak_id: req.body.taak_id
        }
    }).then(Taken => res.json(Taken)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.deleteOne = (req, res) => {
    Taken.destroy({
        where: {
            taak_id: req.body.taak_id
        }
    }).then(Taken => res.json(Taken)).catch(error => {
        res.json({
            message: error
        })
    });
}