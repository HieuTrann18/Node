require('dotenv').config();

module.exports = {
    db_type: process.env.DB_TYPE || 'mysql',

    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },

    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/cleanarchdb'
    },

    port: process.env.PORT
}