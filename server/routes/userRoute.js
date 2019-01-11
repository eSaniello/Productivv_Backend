const userControllers = require('../controllers/userControllers');

function UserRoute(app){
    app.post('/gebruikers', userControllers.Create);
    app.get('/gebruikers', userControllers.SelectAll);
    app.get('/gebruikers/:gebruikers_id', userControllers.SelectOne);
    app.patch('/gebruikers', userControllers.Update);
    app.delete('/gebruikers', userControllers.DeleteOne);
}

module.exports = { UserRoute }; 