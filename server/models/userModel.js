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
        profiel_foto: Sequelize.BLOB,
        voornaam: Sequelize.STRING,
        achternaam: Sequelize.STRING,
        email: Sequelize.STRING,
        wachtwoord: Sequelize.STRING,
        datum_aangemaakt: Sequelize.DATE
    });

    return Gebruikers;
}