var { Schema, model } = require('mongoose');

const filmSchema = new Schema({
  title: String,
  length: Number,
  description: String,
  age_restriced: Boolean,
  age_limit: Number,
  date: Date,
  time: Date,
  room: Number,
  seats: Number,
  address: String,
  address2: String,
  price: Number
},
{
  collection: 'film'
}
)


module.exports = model('film', filmSchema);