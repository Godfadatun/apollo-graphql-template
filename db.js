require('dotenv').config();
module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "root",
    PORT: process.env.DB_PORT || 3306,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME || "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: process.env.DB_QUERY_LEVEL,
};
