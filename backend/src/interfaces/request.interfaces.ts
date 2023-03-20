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

export {
    IBodyLogin,
    IBodySignUp,
    IbodyLoginString
}