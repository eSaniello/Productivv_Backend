const dbConfig = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig[process.env.ENVIRONMENT || 'development']);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/userModel.js')(sequelize, Sequelize);
db.taken = require('../models/taskModel.js')(sequelize, Sequelize);

db.user.hasMany(db.taken, {foreignKey: 'fk_gebruikers_id', sourceKey: 'gebruikers_id'});
db.taken.belongsTo(db.user, {foreignKey: 'fk_gebruikers_id', sourceKey: 'gebruikers_id'});

module.exports = db;