const db = {
    development: {
        host: 'localhost',
        username: 'postgres',
        password: "dzdvml114",
        database: 'productivv',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    },
    production: {
        host: 'localhost',
        username: 'root',
        password: "",
        database: 'productivv',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
}

module.exports = db;