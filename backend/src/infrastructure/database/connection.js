    const config = require('../config/config')
    const mongoose = require('mongoose');
    const mysql = require('mysql2/promise');

    let mySqlConnection = null;

    const connectionDatabase = async () => {
        if(config.db_type == 'mongo'){
            try{
            await mongoose.connect(config.mongo.uri);
                console.log('Mongodb connected')
            }catch(err){
                console.log('Mongodb connection error', err)
            }
        }else if(config.db_type == 'mysql'){
            try{
                mySqlConnection = await mysql.createConnection(config.mysql)
                console.log('Mysql connected')
            }catch(err){
                console.log('Mysql connection error', err)
            }
        }else{
            throw new Error('Unsupported DB Type')
        }
    }

    const getMysqlConnection = () => {
        if(!mySqlConnection) throw new Error('MySQL connection not established')
        return mySqlConnection
    }


    module.exports = {
        connectionDatabase,
        getMysqlConnection
    };
