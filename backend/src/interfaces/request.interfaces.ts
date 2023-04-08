interface IBodyLogin {
    email: String,
    password: String
}
interface IBodySignUp {
    email: String,
    password: String,
    Uname: String,
}
interface IbodyLoginString{
    oldEmail: String,
    newEmail?: String,
    oldPassword?: String,
    newPassword?: String,
}

interface IbodyFilmString{
    title: String,
    length: Number,
    description?: String,
    age_restriced: Boolean,
    age_limit?: Number,
    date: Date,
    time: Date,
    room: Number,
    seats: Number,
    address: String,
    address2?: String,
    price: Number
}

interface IbodyFilmId{
    _id: String,
    title?: String,
    length?: Number,
    description?: String,
    age_restriced?: Boolean,
    age_limit?: Number,
    date?: Date,
    time?: Date,
    room?: Number,
    seats?: Number,
    address?: String,
    address2?: String,
    price?: Number
}

export {
    IBodyLogin,
    IBodySignUp,
    IbodyLoginString,
    IbodyFilmString,
    IbodyFilmId
}