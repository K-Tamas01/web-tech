import mongoose from 'mongoose';
import {username,pw} from '../../conf/conf.json';

mongoose.connect(`mongodb+srv://${username}:${pw}@cluster0.icmztqu.mongodb.net/Mozi`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports.autoload = false;