const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

//Remove when in production
app.use(cors({ credentials: true, origin: true}));

require('./server/routes/userRoute').UserRoute(app);

//When route does not exist, show the requester this message
app.get('*', (req, res) => {
    res.json({
        message: "Welcome to the Productivv API"
    });
});

module.exports = app;