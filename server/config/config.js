const db = {
    development: {
        host: 'ec2-54-221-253-228.compute-1.amazonaws.com',
        username: 'ffwluocyeqcvpf',
        password: "3dec9fbd6dc551c401027318ec5680f0f3fd4aefae7a3b027ea6624da31b8868",
        database: 'd3gnr1pmfu0f2g',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    },
    production: {
        host: 'ec2-54-221-253-228.compute-1.amazonaws.com',
        username: 'ffwluocyeqcvpf',
        password: "3dec9fbd6dc551c401027318ec5680f0f3fd4aefae7a3b027ea6624da31b8868",
        database: 'd3gnr1pmfu0f2g',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
}

module.exports = db;