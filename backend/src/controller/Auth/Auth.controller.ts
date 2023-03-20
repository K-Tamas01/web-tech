import { FastifyReply, FastifyRequest } from 'fastify';

const jwt = require("jsonwebtoken");
const member = require("../../model/user.scehma");

const authenticationwithjwttoken = async(req: FastifyRequest, rep: FastifyReply) =>{
  
  const cookie = req.headers['cookie'];

  const token = cookie?.split('=')[1];

  try{
    if(!token){
      return rep.code(400).send({msg: "Hiányzik a token!"});
    }

    const decoded = jwt.verify(token, process.env.MY_SECRECT_TOKEN);

    const result = await member.findOne({email: decoded.Email});

    if(!result) return rep.code(400).send({msg: "Sikertelen azonosítás"});

  }catch(error){
    return rep.code(401).send({msg: error});
  }
}

module.exports = {
  authenticationwithjwttoken
}