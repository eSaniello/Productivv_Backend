const db = require('../config/dbConfig');
const User = db.user;
const Rooster = db.rooster;

exports.create = (req, res) => {
    Rooster.create({
        blok: req.body.blok,
        tijd: req.body.tijd,
        maandag: req.body.maandag,
        dinsdag: req.body.dinsdag,
        woensdag: req.body.woensdag,
        donderdag: req.body.donderdag,
        vrijdag: req.body.vrijdag,
        zaterdag: req.body.zaterdag,
        fk_gebruikers_id: req.body.fk_gebruikers_id
    }).then(Rooster => res.json(Rooster)).catch(error => {
        res.json({ message: error })
    });
}

exports.findAll = (req, res) => {
    Rooster.findAll().then(Rooster => res.json(Rooster)).catch(error => {
        res.json({message: error})
    });
}

exports.findOne = (req, res) => {
    Rooster.findOne({
        where: { rooster_id: req.params.rooster_id } 
    }).then(Rooster => res.json(Rooster)).catch(error => {
        res.json({message: error})
    });
}

exports.update = (req, res) => {
    Rooster.update({
        blok: req.body.blok,
        tijd: req.body.tijd,
        maandag: req.body.maandag,
        dinsdag: req.body.dinsdag,
        woensdag: req.body.woensdag,
        donderdag: req.body.donderdag,
        vrijdag: req.body.vrijdag,
        zaterdag: req.body.zaterdag,
    },{
        where: {rooster_id : req.body.rooster_id}
    }).then(Rooster => res.json(Rooster)).catch(error => {
        res.json({message: error})
    });
}

exports.deleteOne = (req, res) => {
    Rooster.destroy({
        where: {rooster_id: req.body.rooster_id}
    }).then(Rooster => res.json(Rooster)).catch(error => {
        res.json({message: error})
    });
}

exports.deleteAll = (req, res) => {
    Rooster.destroy().then(Rooster => res.json(Rooster)).catch(error => {
        res.json({message: error})
    })
}