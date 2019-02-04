module.exports = (sequelize, Sequelize) => {
    const Rooster = sequelize.define('rooster', {
        rooster_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blok: Sequelize.INTEGER,
        tijd: Sequelize.STRING,
        maandag: Sequelize.STRING,
        dinsdag: Sequelize.STRING,
        woensdag: Sequelize.STRING,
        donderdag: Sequelize.STRING,
        vrijdag: Sequelize.STRING,
        zaterdag: Sequelize.STRING,
    })

    return Rooster;
}