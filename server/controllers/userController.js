const db = require('../config/dbConfig');
const User = db.user;
const Taken = db.taken;
const Rooster = db.rooster;
const Cijferlijst = db.cijferlijst;

exports.createUser = (req, res) => {
    User.create({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: req.body.wachtwoord,
        datum_aangemaakt: Date()
    }).then(User => res.json(User)).catch(error => {
        res.json({ message: error })
    });
}

exports.findOne = (req, res) => {
    User.findOne({
        where: { gebruikers_naam: req.params.gebruikers_naam },
        include: [
            {
                model: Taken
            },
            {
                model: Rooster
            },
            {
                model: Cijferlijst
            }
        ]
    }).then(User => res.json(User)).catch(error => {
        res.json({message: error})
    });
}

exports.findAll = (req, res) => {
    User.findAll({
        include: [
            {
                model: Taken
            },
            {
                model: Rooster
            },
            {
                model: Cijferlijst
            }
        ]
    }).then(User => res.json(User)).catch(error => {
        res.json({message: error})
    });
}

exports.update = (req, res) => {
    User.update({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: req.body.wachtwoord
    },{
        where: {gebruikers_id : req.body.gebruikers_id}
    }).then(User => res.json(User)).catch(error => {
        res.json({message: error})
    });
}

exports.deleteOne = (req, res) => {
    User.destroy({
        where: {gebruikers_naam: req.body.gebruikers_naam}
    }).then(User => res.json(User)).catch(error => {
        res.json({message: error})
    });
}