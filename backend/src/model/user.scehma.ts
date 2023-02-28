var { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  Uname: String,
  password: String,
},
{
  collection: 'user'
}
)


module.exports = model('user', userSchema);