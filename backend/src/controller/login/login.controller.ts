import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodyLogin, IbodyLoginString } from '../../interfaces/request.interfaces';

const login = require('../../model/user.scehma');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


const loginCtrl = async(req: FastifyRequest<{Body: IBodyLogin}>, rep: FastifyReply) =>{
    const {Email, Password} = req.body;

    const result = login.findOne({email: Email});

    if(!result) rep.code(404).send("Nincs ilyen Email cím!");
    if(result.password !== md5(Password)) rep.code(404).send("Hibás jelszó");

    const payload = {
      Email: result.email,
      Password: result.password,
      _id: result._id
    };
    
    const token = jwt.sign(
      payload,
      process.env.MY_SECRECT_TOKEN,
      {expiresIn: 60 * 60 * 1 } //1 óra
    )

    rep.code(200).send(token);
};

const deleteAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {
  const { Email } = req.body;
  const result = await login.deleteOne({Email:Email});

  if(result.deletedCount === 0) rep.code(400).send("Sikertelen!");

  rep.code(200).send(result);
  
};

const updateAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {
  const { Email } = req.body;
  const result = await login.updateOne({Email:Email}, req.body,{
    upsert: true
  })

  if(!result) rep.code(400).send("Sikertelen!");

  rep.code(200).send(result);
};

module.exports = {
  loginCtrl,
  deleteAcc,
  updateAcc
}