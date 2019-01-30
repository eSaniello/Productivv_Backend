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
       compleet: req.body.compleet,
       categorie: req.body.categorie,
       fk_gebruikers_id: req.body.fk_gebruikers_id
    }).then(Taken => res.json(Taken)).catch(error => {
        res.json({ message: error })
    });
}

exports.findAll = (req, res) => {
    Taken.findAll().then(Taken => res.json(Taken)).catch(error => {
        res.json({message: error})
    });
}

// exports.findOne = (req, res) => {
//     User.findOne({
//         where: { gebruikers_naam: req.params.gebruikers_naam } 
//     }).then(User => res.json(User)).catch(error => {
//         res.json({message: error})
//     });
// }

// exports.update = (req, res) => {
//     User.update({
//         gebruikers_naam: req.body.gebruikers_naam,
//         voornaam: req.body.voornaam,
//         achternaam: req.body.achternaam,
//         email: req.body.email,
//         wachtwoord: req.body.wachtwoord
//     },{
//         where: {gebruikers_id : req.body.gebruikers_id}
//     }).then(User => res.json(User)).catch(error => {
//         res.json({message: error})
//     });
// }

// exports.deleteOne = (req, res) => {
//     User.destroy({
//         where: {gebruikers_naam: req.body.gebruikers_naam}
//     }).then(User => res.json(User)).catch(error => {
//         res.json({message: error})
//     });
// }