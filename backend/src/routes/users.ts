import { FastifyInstance } from "fastify";

const login = require('../controller/login/login.controller');
const signup = require('../controller/sign-up/sign-up.controller');
const auth = require('../controller/Auth/Auth.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
  fastify.post('/login',{handler: login.loginCtrl})
  fastify.post('/sign-up',{handler: signup.signupnCtrl})
  fastify.put('/update-data',{preHandler: auth.authenticationwithjwttoken, handler: login.updateAcc})
  fastify.delete('/delete-account',{preHandler: auth.authenticationwithjwttoken, handler: login.deleteAcc})
  fastify.post('/options',{preHandler: auth.authenticationwithjwttoken, handler: login.getAccData})
  }