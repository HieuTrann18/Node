const config = require('../config/config')


const createRepository = (entity) => {

    let ImplementRepository;

    if (config.db_type == 'mongo') {
        ImplementRepository = require(`../repositories/mongodb/${entity}ImpMongo`)
    } else if (config.db_type == 'mysql') {
        ImplementRepository = require(`../repositories/mysql/${entity}ImpMysql`)
    } else {
        throw new Error('Unsupported DB type');
    }

    return new ImplementRepository()

}


module.exports = createRepository