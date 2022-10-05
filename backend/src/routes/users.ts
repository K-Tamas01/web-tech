import { FastifyInstance } from "fastify";

const login = require('../controller/login.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
  fastify.post('/login',{handler: login.loginCtrl});
  }