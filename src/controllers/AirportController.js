//import AirportDBSchema from '../database/airportschema';
import UserDBSchema from '../database/schema';
import Sequelize from 'sequelize';
import SqlStore from '../modules/databaseFilter';
const crypto = require('crypto');

export default class AirportController {
  constructor() {
    this.AirportDB = new UserDBSchema();
    // this.sqlStore = new SqlStore({}, this.AirportDB.objectdb(), {
    //    AirportId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    //   AirportIataCode: Sequelize.STRING,
    //   AirportIcaoCode: Sequelize.STRING,
    //   AirportName: Sequelize.STRING,
    //   AirportCity: Sequelize.STRING,
    //   RowStatusTypeId: Sequelize.INTEGER,
    //   CustomProperty: Sequelize.STRING,
    //   EditUserId: Sequelize.INTEGER,
    //   EditVersion: Sequelize.STRING,
    //   EditTime: Sequelize.STRING,
    //   EditHostName: Sequelize.STRING,
    //   EditHostAddress: Sequelize.STRING
    // });
  }
  async create(obj) {
    console.log('in controllers create');
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
  async findAll() {
    // return await this.sqlStore.search(req);
    return await this.AirportDB.Airport.findAll();
  }
}
