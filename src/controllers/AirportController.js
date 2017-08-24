import AirportDBSchema from '../database/airportschema';
// import Sequelize from 'sequelize';
// import SqlStore from '../modules/databaseFilter';
const crypto = require('crypto');

export default class AirportController {
  constructor() {
    this.AirportDB = new AirportDBSchema();
    // this.sqlStore = new SqlStore({}, this.UserDB.objectdb(), {
    //   userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    //   display_name: Sequelize.STRING,
    //   username: Sequelize.STRING,
    //   email_address: Sequelize.STRING,
    //   firstname: Sequelize.STRING,
    //   lastname: Sequelize.STRING,
    //   created_by: Sequelize.STRING,
    //   updated_by: Sequelize.STRING,
    //   change_pw: Sequelize.INTEGER,
    //   account_locked: Sequelize.INTEGER,
    //   user_disabled: Sequelize.INTEGER,
    // });
  }
  async create(obj) {
    return await this.AirportDB.Airport.create(obj);
  }
  async update(id, obj) {
    return await this.AirportDB.Airport.update(obj, { where: { userId: id } });
  }
  async delete() {

  }
  async findById(id) {
    return await this.AirportDB.Airport.findOne({ userId: id });
  }
  async findAll(query, req, res) {
    // return await this.sqlStore.search(req);
  }
}
