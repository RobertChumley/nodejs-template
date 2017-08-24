//
import UserDBSchema from '../database/schema';
import Sequelize from 'sequelize';
import SqlStore from '../modules/databaseFilter';

const crypto = require('crypto');

export default class UserController {
  constructor() {
    this.UserDB = new UserDBSchema();
    this.sqlStore = new SqlStore({}, this.UserDB.objectdb(), {
      userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      display_name: Sequelize.STRING,
      username: Sequelize.STRING,
      email_address: Sequelize.STRING,
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
      change_pw: Sequelize.INTEGER,
      account_locked: Sequelize.INTEGER,
      user_disabled: Sequelize.INTEGER,
    });
  }
  async create(obj) {
    obj.password = crypto.createHash('sha256').update(obj.password).digest('base64');
    return await this.UserDB.User.create(obj);
  }
  async update(id, obj) {
    // let updateObj = await this.UserDB.User.findOne({userId:id});
    // console.log('update obj - ',updateObj);
    // {ad_display_name : req.body.ad_display_name || updateObj.ad_display_name}
    obj.password = crypto.createHash('sha256').update(obj.password).digest('base64');
    return await this.UserDB.User.update(obj, { where: { userId: id } });
  }
  async delete() {

  }
  async findById(id) {
    return await this.UserDB.User.findOne({ userId: id });
  }
  async findAll(query, req, res) {
    return await this.sqlStore.search(req);
  }
}
