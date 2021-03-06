const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const User = db.user;
const Taken = db.taken;
const Rooster = db.rooster;
const Cijferlijst = db.cijferlijst;

const salt = bcrypt.genSaltSync(10);

exports.createUser = (req, res) => {
    User.create({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: bcrypt.hashSync(req.body.wachtwoord, salt),
        resetPasswordToken: req.body.resetPasswordToken
    }).then(User => res.json(User)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.findOne = (req, res) => {
    User.findOne({
        where: {
            gebruikers_naam: req.params.gebruikers_naam
        },
        include: [{
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
        res.json({
            message: error
        })
    });
}

exports.findAll = (req, res) => {
    User.findAll({
        include: [{
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
        res.json({
            message: error
        })
    });
}

exports.update = (req, res) => {
    User.update({
        gebruikers_naam: req.body.gebruikers_naam,
        voornaam: req.body.voornaam,
        achternaam: req.body.achternaam,
        email: req.body.email,
        wachtwoord: bcrypt.hashSync(req.body.wachtwoord, salt),
        resetPasswordToken: req.body.resetPasswordToken
    }, {
        where: {
            gebruikers_id: req.body.gebruikers_id
        }
    }).then(User => res.json(User)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.deleteOne = (req, res) => {
    User.destroy({
        where: {
            gebruikers_naam: req.body.gebruikers_naam
        }
    }).then(User => res.json(User)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.checkPassword = (req, res) => {
    User.findAll({
        where: {
            gebruikers_naam: req.body.gebruikers_naam
        }
    }).then(user => {
        if (user[0]) {
            bcrypt.compare(req.body.wachtwoord, user[0].wachtwoord, (err, bcryptResult) => {
                if (bcryptResult) {
                    res.json(true);
                } else {
                    res.json(false);
                }
            })
        } else {
            res.json({
                message: "User not found"
            });
        }
    }).catch(e => res.json({
        message: e
    }));
}