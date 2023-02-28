interface IBodyLogin {
    Email: String,
    Password: String
};

interface IjwttokenHeader {
    token: String
};

interface IBodySignUp {
    Email: String,
    Password: String,
    Name: String,
}

interface IbodyLoginString{
    Email: String
}

export {
    IBodyLogin,
    IjwttokenHeader,
    IBodySignUp,
    IbodyLoginString
}