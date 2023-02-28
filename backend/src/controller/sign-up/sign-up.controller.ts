import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodySignUp } from '../../interfaces/request.interfaces';

const signup = require('../../model/user.scehma');

const signupnCtrl = async(req: FastifyRequest<{Body: IBodySignUp}>, rep: FastifyReply) =>{
  const newSignup = new signup(req.body);

  try{
    await newSignup.save();
  }catch(e){
    rep.code(400).send(e);
  }

  rep.code(201).send("Sikeres regisztráció!");


};

module.exports = {
  signupnCtrl
}