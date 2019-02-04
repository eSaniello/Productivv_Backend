const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./server/config/dbConfig');

app.use(logger('dev'));
app.use(bodyParser.json());

//Remove when in production
app.use(cors({ credentials: true, origin: true}));

//fore = true when you want to drop and create all the tables
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

//routes
require('./server/routes/userRoute')(app);
require('./server/routes/taskRoute')(app);
require('./server/routes/roosterRoute')(app);
require('./server/routes/cijferlijstRoute')(app);

//When route does not exist, show the requester this message
app.get('*', (req, res) => {
    res.json({
        message: "Welcome to the Productivv API"
    });
});

module.exports = app;