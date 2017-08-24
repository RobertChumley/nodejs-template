/**
 * Created by robert on 8/18/17.
 */
/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */


import { Router } from 'express';

const router = new Router();
const crypto = require('crypto');

import BaseApi from './baseapi';
import UserController from '../controllers/UserController';


class UserApi extends BaseApi {
  constructor() {
    super();
    this.userController = new UserController();
    // this.authenticate
    this.router.post('/authenticate', async (req, res) => {
      try {
        await this.authenticate(req, res);
      } catch (err) {
        res.json({ message: err.toString() });
      }
    });

    this.router.get('/my_method', async (req, res) => {
      try {
        await this.my_method(req, res);
      } catch (e) {
        res.json({ message: e.toString() });
      }
    });
  }
  async my_method(req, res) {

  }
  async authenticate(req, res) {
    // whenever it is called
    const authObj = await this.UserDB.User.findOne({ username: req.body.username });
    if (authObj.username === req.body.username && authObj.password === crypto.createHash('sha256').update(req.body.password).digest('base64')) {

    } else {
      res.json({ message: 'error in authentication' });
    }
  }


  async search(req, res) {
    const data = await this.userController.findAll(req.body, req, res);
    res.json(data);
  }
  async getById(id, req, res) {
    const data = await this.userController.findById(id);
    res.json(data);
  }
  async post(req, res) {
    const data = await this.userController.create(req.body);
    // removing pasword before giving a response
    delete data.dataValues.password;
    res.json(data);
  }
  async put(id, req, res) {
    const data = await this.userController.update(id, req.body);
    res.json(data);
  }
  async patch(id, req, res) {

  }
  async deleteById(id, req, res) {

  }
}
const userApi = new UserApi();
export default userApi.router;
