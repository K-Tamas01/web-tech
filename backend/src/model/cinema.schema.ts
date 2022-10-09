var { Schema, model } = require('mongoose');

const cinemaSchema = new Schema({
  Cinemaname: String,
  City: String,
  Address: String,
  OpeningHours: String,
},
{
  collection: 'cinema'
}
)


module.exports = model('cinema', cinemaSchema);