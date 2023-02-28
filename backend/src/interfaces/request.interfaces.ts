interface IBodyLogin {
    email: String,
    password: String
};

interface IjwttokenHeader {
    token: String
};

interface IBodySignUp {
    email: String,
    password: String,
    Uname: String,
}

interface IbodyLoginString{
    email: String
}

export {
    IBodyLogin,
    IjwttokenHeader,
    IBodySignUp,
    IbodyLoginString
}