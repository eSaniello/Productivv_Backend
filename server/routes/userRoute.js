module.exports = (app) => {
    const userController = require('../controllers/userController');

    app.post('/gebruikers/create', userController.createUser);
    app.get('/gebruikers', userController.findAll);
    app.get('/gebruikers/:gebruikers_naam', userController.findOne);
    app.put('/gebruikers', userController.update);
    app.delete('/gebruikers', userController.deleteOne);
    app.post('/gebruikers/check_password', userController.checkPassword);
    app.put('/gebruikers/forgot_password', userController.forgotPassword);
}