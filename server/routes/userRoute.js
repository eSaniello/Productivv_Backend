module.exports = (app) => {
    const userController = require('../controllers/userController');

    app.post('/gebruikers/create', userController.createUser);
    app.get('/gebruikers', userController.findAll);
    app.get('/gebruikers/:gebruikers_naam', userController.findOne);
    app.patch('/gebruikers', userController.update);
    app.delete('/gebruikers', userController.deleteOne);
    app.get('/gebruikers/check_password', userController.checkPassword);
}