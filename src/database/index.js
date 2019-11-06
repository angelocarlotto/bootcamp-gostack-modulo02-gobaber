import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointments from '../app/models/Appointments';
import databaseconfig from '../config/database';

const models = [User, File, Appointments];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connnection = new Sequelize(databaseconfig);
        models
            .map(model => model.init(this.connnection))
            .map(
                model =>
                    model.associate && model.associate(this.connnection.models)
            );
    }
}

export default new Database();
