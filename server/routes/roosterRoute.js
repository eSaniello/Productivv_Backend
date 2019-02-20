module.exports = (app) => {
    const roosterController = require('../controllers/roosterController');

    app.post('/rooster/create', roosterController.create);
    app.get('/rooster', roosterController.findAll);
    app.get('/rooster/:rooster_id', roosterController.findOne);
    app.put('/rooster', roosterController.update);
    app.delete('/rooster/deleteOne', roosterController.deleteOne);
    app.delete('/rooster', roosterController.deleteAll);
}