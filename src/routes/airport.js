
import { Router } from 'express';

const router = new Router();
import AirportController from '../controllers/AirportController';

import BaseApi from './baseapi';
class AirportApi extends BaseApi {
  constructor() {
    super();
    this.airportController = new AirportController();
  }


  async search(req, res) {

    const data = await this.airportController.findAll(req.body, req, res);
    res.json(data);
  }
  async getById(id, req, res) {
    const data = await this.airportController.findById(id);
    res.json(data);
  }
  async post(req, res) {
    const data = await this.airportController.create(req.body);
    res.json(data);
  }
  async put(id, req, res) {
    const data = await this.airportController.update(id, req.body);
    res.json(data);
  }
  async patch(id, req, res) {

  }
  async deleteById(id, req, res) {

  }
}
const airportApi = new AirportApi();
export default airportApi.router;
