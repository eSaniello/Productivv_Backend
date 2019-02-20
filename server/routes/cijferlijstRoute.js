module.exports = (app) => {
    const cijferlijstController = require('../controllers/cijferlijstController');

    app.post('/cijferlijst/create', cijferlijstController.create);
    app.get('/cijferlijst', cijferlijstController.findAll);
    app.get('/cijferlijst/:cijferlijst_id', cijferlijstController.findOne);
    app.put('/cijferlijst', cijferlijstController.update);
    app.delete('/cijferlijst/deleteOne', cijferlijstController.deleteOne);
    app.delete('/cijferlijst', cijferlijstController.deleteAll);
}