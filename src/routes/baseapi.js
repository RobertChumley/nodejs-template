
import RouterBase from '../router/routerbase';
import { Router } from 'express';

export default class BaseApi extends RouterBase {
  constructor() {
    const router = new Router();
    super(router, {});
    this.router = router;
  }
  async search(req, res) {

  }
  async getById(id, req, res) {

  }
  async post(req, res) {

  }
  async put(id, req, res) {

  }
  async patch(id, req, res) {

  }
  async deleteById(id, req, res) {

  }
}

