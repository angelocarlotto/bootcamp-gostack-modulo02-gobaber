import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseconfig from '../config/database';

const models = [User, File, Appointment];

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
