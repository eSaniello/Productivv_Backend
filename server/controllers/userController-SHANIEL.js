const db = require('../config/dbConfig');
const User = db.user;
const Taken = db.taken;

exports.create = (req, res) => {
    User.create({
        gebruikers_naam: 'eSaniello',
        voornaam: 'Shaniel',
        achternaam: 'Samadhan',
        email: 'shaniel29samadhan@gmail.com',
        wachtwoord: 'password',
        taken: [
            {
                titel: 'Projecten huiswerk',
                omschrijving: 'Logboek en urenstaat maken',
                opleverings_datum: Date(), 
                prioriteit: 'Normal',
                compleet: false,
                categorie: 'Huiswerk'
            },
            {
                titel: 'Nederlands Rep',
                omschrijving: 'Ontleden studeren',
                opleverings_datum: Date(), 
                prioriteit: 'Important',
                compleet: false,
                categorie: 'Rep'
            }
        ]
    }, {
        include: [Taken]
    }).then(Users => res.json(Users)).catch(error => {
        res.json({ message: error});
    });
}

exports.findAll = (req, res) => {
    
}

// //CREATE
// function Create(req, res){
//     gebruikers.create({
//         gebruikers_naam: req.body.gebruikers_naam,
//         voornaam: req.body.voornaam,
//         achternaam: req.body.achternaam,
//         email: req.body.email,
//         wachtwoord: req.body.wachtwoord
//     }).then(gebruikers => res.json(gebruikers)).catch(error => {
//         res.json({ message: error })
//     });
// }

// //READ
// function SelectAll(req, res){
//     gebruikers.findAll().then(gebruikers => {
//         res.json(gebruikers);
//     }).catch(error => {
//         res.json({message: error});
//     });
// }

// function SelectOne(req, res) {
//     gebruikers.findOne({
//         where: { gebruikers_id: req.params.gebruikers_id } 
//     }).then(gebruikers => res.json(gebruikers)).catch(error => {
//         res.json({message: error})
//     });
// }

// //UPDATE
// function Update(req, res){
//     gebruikers.update({
//         gebruikers_naam: req.body.gebruikers_naam,
//         voornaam: req.body.voornaam,
//         achternaam: req.body.achternaam,
//         email: req.body.email,
//         wachtwoord: req.body.wachtwoord
//     }, {
//         where: {gebruikers_id : req.body.gebruikers_id}
//     }).then(gebruikers => res.json(gebruikers)).catch(error => {
//         res.json({message: error})
//     });
// }

// //DELETE
// function DeleteOne(req, res){
//     gebruikers.destroy({
//         where: {gebruikers_id: req.body.gebruikers_id}
//     }).then(gebruikers => res.json(gebruikers)).catch(error => {
//         res.json({message: error})
//     });
// }