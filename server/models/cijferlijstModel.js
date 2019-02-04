module.exports = (sequelize, Sequelize) => {
    const Cijferlijst = sequelize.define('cijferlijst', {
        cijferlijst_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vak: Sequelize.STRING,
        periode_1: Sequelize.DOUBLE,
        periode_2: Sequelize.DOUBLE,
        periode_3: Sequelize.DOUBLE,
        periode_4: Sequelize.DOUBLE
    })

    return Cijferlijst;
}