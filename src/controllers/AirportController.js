import AirportDBSchema from '../database/airportschema';

export default class AirportController {
  constructor() {
    this.AirportDB = new AirportDBSchema();
  }
  async create(obj) {
    console.log('in controllers create');
    return await this.AirportDB.Airport.create(obj);
  }
  async update(id, obj) {
    return await this.AirportDB.Airport.update(obj, { where: { AirportId: id } });
  }
  async delete() {

  }
  async findById(id) {
    return await this.AirportDB.Airport.findOne({ AirportId: id });
  }
  async findAll() {
    return await this.AirportDB.Airport.findAll();
  }
}
