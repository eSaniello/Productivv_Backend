const db = require('../config/dbConfig');
const User = db.user;
const Cijferlijst = db.cijferlijst;

exports.create = (req, res) => {
    Cijferlijst.create({
        vak: req.body.vak,
        periode_1: req.body.periode_1,
        periode_2: req.body.periode_2,
        periode_3: req.body.periode_3,
        periode_4: req.body.periode_4,
        fk_gebruikers_id: req.body.fk_gebruikers_id
    }).then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.findAll = (req, res) => {
    Cijferlijst.findAll().then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.findOne = (req, res) => {
    Cijferlijst.findOne({
        where: {
            cijferlijst_id: req.params.cijferlijst_id
        }
    }).then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.update = (req, res) => {
    Cijferlijst.update({
        vak: req.body.vak,
        periode_1: req.body.periode_1,
        periode_2: req.body.periode_2,
        periode_3: req.body.periode_3,
        periode_4: req.body.periode_4,
    }, {
        where: {
            cijferlijst_id: req.body.cijferlijst_id
        }
    }).then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.deleteOne = (req, res) => {
    Cijferlijst.destroy({
        where: {
            cijferlijst_id: req.body.cijferlijst_id
        }
    }).then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    });
}

exports.deleteAll = (req, res) => {
    Cijferlijst.destroy().then(Cijferlijst => res.json(Cijferlijst)).catch(error => {
        res.json({
            message: error
        })
    })
}