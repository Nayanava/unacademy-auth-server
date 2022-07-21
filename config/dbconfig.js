module.exports = {
    development: {
        HOST: '127.0.0.1',
        PORT: 3306,
        USER: 'root',
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
        DB: "sql10507878",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

/*
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5heWFuYXZhZGUiLCJpYXQiOjE2NTg0MjA1MzcsImV4cCI6MTY1ODQyMTEzOH0.rJNt2WHZCjT0BuvYYmb6E4jK8TkBSDDcY5WqGTfSJaA",
    "refreshToken": "e55ffc5172ed66ee9d80a3c5792325ff3ca0957c981dd5b2f73da6511a4744814852894797257b7d9722f80730c1f13fdbeca6b4884be7bc3d98e09044b8fd3f"
}
*/