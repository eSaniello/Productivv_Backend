const db = {
    development: {
        host: 'localhost',
        username: 'root',
        password: "",
        database: 'productivv',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }, 
    production: {
        host: 'localhost',
        username: 'root',
        password: "",
        database: 'productivv',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
}

module.exports = db;