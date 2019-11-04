import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseconfig from '../config/database';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connnection = new Sequelize(databaseconfig);
        models.map(model => model.init(this.connnection));
    }
}

export default new Database();
