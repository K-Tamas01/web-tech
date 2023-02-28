import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodySignUp } from '../../interfaces/request.interfaces';

const signup = require('../../model/user.scehma');
const md5 = require("md5");

const signupnCtrl = async(req: FastifyRequest<{Body: IBodySignUp}>, rep: FastifyReply) =>{
  const {Email, Name, Password} = req.body;

  console.log(signup.findOne({email: Email}))

  if(signup.findOne({email: Email})) rep.code(400).send("Ez az Email cím már foglalt!");
  
  const newSignup = new signup({
    Email: Email,
    Name: Name,
    Password: md5(Password)
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