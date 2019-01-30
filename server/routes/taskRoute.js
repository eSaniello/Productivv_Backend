module.exports = (app) => {
    const taskController = require('../controllers/taskController');

    app.post('/taken/create', taskController.createTask);
    app.get('/taken', taskController.findAll);
    // app.get('/gebruikers/:gebruikers_naam', userController.findOne);
    // app.patch('/gebruikers', userController.update);
    // app.delete('/gebruikers', userController.deleteOne);
}