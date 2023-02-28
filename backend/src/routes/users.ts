import { FastifyInstance } from "fastify";

const login = require('../controller/login.controller');
const signup = require('../controller/sign-up/sign-up.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
  fastify.post('/login',{handler: login.loginCtrl});
  fastify.post('sign-up',{handler: signup.signupnCtrl})
  }