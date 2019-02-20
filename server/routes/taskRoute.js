module.exports = (app) => {
    const taskController = require('../controllers/taskController');

    app.post('/taken/create', taskController.createTask);
    app.get('/taken', taskController.findAll);
    app.get('/taken/:taak_id', taskController.findOne);
    app.put('/taken', taskController.update);
    app.delete('/taken', taskController.deleteOne);
}