import { FastifyReply, FastifyRequest } from 'fastify';
import { IjwttokenHeader } from '../../interfaces/request.interfaces';

const jwt = require("jsonwebtoken");
const member = require("../../model/user.scehma");

const authenticationwithjwttoken = async(req: FastifyRequest<{Headers: IjwttokenHeader}>, rep: FastifyReply) =>{
  
  const {token} = req.headers;
  let decoded;

  try{
    if(!token){
      rep.code(400).send("Hiányzik a token!");
    }
    decoded = jwt.verify(token, process.env.MY_SECRET_KEY);

    const result = await member.findOne({email: decoded.Email});

    if(!result) rep.code(400).send("Sikertelen azonosítás");

  }catch(error){
    rep.code(401).send(error);
  }
}

module.exports = {
  authenticationwithjwttoken
}