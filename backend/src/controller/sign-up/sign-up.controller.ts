import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodySignUp } from '../../interfaces/request.interfaces';

const signup = require('../../model/user.scehma');
const md5 = require("md5");

const signupnCtrl = async(req: FastifyRequest<{Body: IBodySignUp}>, rep: FastifyReply) =>{
  const { email, Uname, password } = req.body;

  if(await signup.findOne({email: email})) {
    rep.code(400).send("Ez az Email cím már foglalt!");
    return;
  }
  
  const newSignup = new signup({
    email: email,
    Uname: Uname,
    password: md5(password)
  });

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