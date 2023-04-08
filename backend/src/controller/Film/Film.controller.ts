import { FastifyReply, FastifyRequest } from 'fastify';
import { IbodyFilmString, IbodyFilmId } from '../../interfaces/request.interfaces';

const film = require('../../model/film.schema');


const getFilms = async(req: FastifyRequest, rep: FastifyReply) => {
    
    const result = await film.find();

    if(!result) return rep.code(400).send({msg: 'Hiba történt a lekérdezéskor!'});

    rep.code(200).send(result);
}

const createFilm = async(req: FastifyRequest<{Body: IbodyFilmString}>, rep: FastifyReply) => {
    
    const {
        title, 
        length, 
        description, 
        age_restriced, 
        age_limit,
        date, 
        time, 
        room, 
        seats, 
        address, 
        address2,
        price
    } = req.body;

    const newFilm = new film({
        title, 
        length, 
        description, 
        age_restriced, 
        age_limit, 
        date, 
        time, 
        room, 
        seats, 
        address, 
        address2,
        price
    });

    try{
        await newFilm.save();
      }catch(e){
        rep.code(400).send({msg: e});
      }
    
      rep.code(201).send({msg: "Sikeres felvétel a listára!"});


}

const updateFilm = async(req: FastifyRequest<{Body: IbodyFilmId}>, rep: FastifyReply) => {

    const { _id } = req.body;

    console.log(_id)
    
    const result = await film.updateOne({_id: _id}, req.body, {upsert: false});

    if(!result) return rep.code(400).send({msg: 'Hiba történt...'});

    rep.code(200).send({msg: 'A mező/mezők frissítve lettek!'});
}

const deleteFilm = async(req: FastifyRequest<{Body: IbodyFilmId}>, rep: FastifyReply) => {

    const { _id } = req.body;
    
    const result = await film.deleteOne({_id: _id});

    if(result.deletedCount === 0) return rep.code(400).send({msg: 'Hiba történt...'});

    rep.code(200).send({msg: 'A film kikerült a listáról!'});
}

module.exports = {
    getFilms,
    createFilm,
    updateFilm,
    deleteFilm
}