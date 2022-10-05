import { FastifyReply, FastifyRequest } from 'fastify';

const loginCtrl = async(req: FastifyRequest, rep: FastifyReply) =>{
  rep.code(200).send("Szia!");
};

module.exports = {
  loginCtrl
}