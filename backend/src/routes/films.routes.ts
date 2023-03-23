import { FastifyInstance } from "fastify";

const film = require('../controller/Film/Film.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
    fastify.get('/films',{handler: film.getFilms})
    fastify.post('/add-films', {handler: film.createFilm})
    fastify.put('/update-film', {handler: film.updateFilm})
    fastify.delete('/remove-film', {handler: film.deleteFilm})
    }