import { FastifyReply, FastifyRequest } from 'fastify';

const Cinema = require('../../model/cinema.schema');

const getCinemaCtrl = async (req: FastifyRequest,rep:FastifyReply) =>{

    const result = await Cinema.find();
  
    rep.code(200).send(result);
}

module.exports ={
    getCinemaCtrl
  };