import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodyLogin, IbodyLoginString, IjwttokenHeader } from '../../interfaces/request.interfaces';

const login = require('../../model/user.scehma');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


const loginCtrl = async(req: FastifyRequest<{Body: IBodyLogin}>, rep: FastifyReply) =>{
    const {email, password} = req.body;

    const result = await login.findOne({email: email});

    if(!result) return rep.code(404).send({msg: 'Nincs ilyen Email cím!'});
    if(result.password !== md5(password)) return rep.code(400).send({msg: 'Hibás jelszó'});

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

    rep.code(200).header('set-cookie', token).send({ID: result._id, Username: result.Uname, Email: result.email});
};

const deleteAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {
  const { oldEmail } = req.body;
  const result = await login.deleteOne({email: oldEmail});

  if(result.deletedCount === 0) rep.code(400).send({msg: 'Hiba történt...'});

  rep.code(200).send(result);
  
};

const updateAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {
  const { newEmail, oldEmail, oldPassword, newPassword } = req.body;

  const result = await login.findOne({email: oldEmail});

  if(!result) rep.code(400).send({msg: 'Hiba történt...'});

  if(newEmail !== '') {
    const update = await login.updateOne({email: oldEmail}, {email: newEmail}, {upsert: false})
    if(!update) rep.code(400).send({msg: 'Hiba történt...'})
  }

  if(md5(oldPassword) == result.password) rep.code(400).send({msg: 'Hibás jelszó!'})

  if(newPassword !== '') {
    const update = await login.updateOne({email: oldEmail}, {password: md5(newPassword)}, {upsert: false})
    if(!update) rep.code(400).send({msg: 'Hiba történt...'})
  }

  newEmail ? rep.code(200).send({msg: 'Sikeres változtatás', email: newEmail}) : rep.code(200).send({msg: 'Sikeres változtatás'});
};

const getAccData = async (req: FastifyRequest<{Headers: IjwttokenHeader}>, rep: FastifyReply) => {
  const {token} = req.headers;

  const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);

  const result = await login.findOne({email: decoded.Email});

  rep.code(200).send({"id": result._id});
}

module.exports = {
  loginCtrl,
  deleteAcc,
  updateAcc,
  getAccData
}