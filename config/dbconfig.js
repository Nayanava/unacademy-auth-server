module.exports = {
    development: {
        HOST: '127.0.0.1',
        PORT: 3306,
        USER: 'root',
        PASSWORD: '',
        DB: "ecom_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production: {
        HOST: 'sql10.freemysqlhosting.net',
        PORT: 3306,
        USER: 'sql10507878',
        PASSWORD: 'JgPQlrx6pB',
        DB: "auth_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}