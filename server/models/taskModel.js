module.exports = (sequelize, Sequelize) => {
    const Taken = sequelize.define('taken', {
        taak_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titel: Sequelize.STRING,
        omschrijving: Sequelize.STRING,
        opleverings_datum: Sequelize.DATEONLY,
        prioriteit: Sequelize.STRING,
        datum_aangemaakt: Sequelize.DATE,
        compleet: Sequelize.BOOLEAN,
        categorie: Sequelize.STRING
    })

    return Taken;
}