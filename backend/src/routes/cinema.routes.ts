import { FastifyInstance } from "fastify";

const cinema = require('../controller/cinema/cinema.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
    fastify
    .get('/cinema',{handler: cinema.getCinemaCtrl });
}