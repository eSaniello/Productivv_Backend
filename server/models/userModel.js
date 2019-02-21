module.exports = (sequelize, Sequelize) => {
    const Gebruikers = sequelize.define('gebruikers', {
        gebruikers_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gebruikers_naam: {
            type: Sequelize.STRING,
            unique: true
        },
        voornaam: Sequelize.STRING,
        achternaam: Sequelize.STRING,
        email: Sequelize.STRING,
        wachtwoord: Sequelize.STRING,
        resetPasswordToken: Sequelize.STRING
    });

    return Gebruikers;
}