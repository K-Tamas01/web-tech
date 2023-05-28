# WebTech-2 Beadandó dokumentáció

## Feltelepítés és elindítás
### 1. lépés
Mindkét mappában a backend és a frontend mappán belül adjuk a ki az alábbi parancsot:

```npm install```

### 2. lépés
Mindkét mappán belül indítunk egy terminált és kiadjuk az alábbi paranocst:
    
```npm start```

A parancs kiadása után elindul a **React webszerver** és majd a **http://Localhost:3000** porton lehet majd megnyitni, és a **backend** pedig majd az **5000-es** porton fog elindulni.


A regisztráció és a bejelentkezést követően több lehetősgünk van az oldalon csinálni.
Kijelentkezve csak adatok lekérése lehetsgés csak annak módosítása és létrehozása csak bejelentkezve lehetséges.

## Felhasználói felület
Amíg nem vagyunk be jelentkezve a fiókunkban az oldalon korlátozott lehetőségeink vannak ebben az esetben olyan oldalak elérhetőek a számunkra ahol csak GET kérésekkel dolgozunk szóval valamilyen lekérdezésről van szó de adat manipulációrol vagy felülírásról szó nincs. Amik első körben mindig elérhetőek számunkra az alábbi ábra mutatja.(1. ábra)
<div style="text-align: center;">
     <img src="./Assign_Assets/menu.png" alt="NavBar">
</div>

A bejelentkezés fülre kattintva lehetőségünk van Fiókot létre hozni vagy esetleg bejelentkezni az oldalra.
<div style="display: flex;">
  <div style="flex: 50%; padding: 5px;">
    <img src="./Assign_Assets/login.png" alt="Bejelentkezés">
    (2. ábra) Bejelentkezés
  </div>
  <div style="flex: 50%; padding: 5px;">
    <img src="./Assign_Assets/signup.png" alt="Regisztráció">
    (3. ábra) Regisztráció
  </div>
</div>

Bejelentkezés után már sokkal több lehetőségünk van az oldalon ezt a következő ábra is jól szemlélteti.
<div style="text-align: center;">
     <img src="./Assign_Assets/extendedmenu.png" alt="NavBar">
     (4. ábra)
</div>
Itt megjeleník fiók kezelési Opció illetve Filmek felvétele egy listára vagy azok módosítása is. Elöszőr nézzük meg hogyan is nézki a fiók kezeléssel kapcsolatos oldal.
<div style="text-align: center;">
     <img src="./Assign_Assets/accountSetting.png" alt="Account">
     (5. ábra)
</div>
A következő oldalon felvehetünk filemeket a vetítési listára illetve módosíthatjuk vagy törölhetjük őket a listából is ezt a követekező ábrán lesz látható.
<div style="text-align: center;">
     <img src="./Assign_Assets/CreateFilm.png" alt="Create File Page">
     (6. ábra)
</div>
A következő képen azt láthatjuk hogyan is látszik hogyan tudjuk módsítani az adatokat a fenti listából kiválastjuk az egyik filmet és annak az adatait beilleszti a megfelelő helyekre.
<div style="text-align: center;">
     <img src="./Assign_Assets/modify.png" alt="Modify Page">
     (7. ábra)
</div>

Amiket felvettünk a listára filmeket összesítve egy táblázatban tudjuk megnézni és milyen adatokat tartalmaz.
<div style="text-align: center;">
     <img src="./Assign_Assets/filmList.png" alt="Film List">
     (7. ábra)
</div>

A végére maradt az az oldal ahol megnézhetjük mely városokban mennyi mozi található hol melyik városban utca ház számmal nyitva tartással együtt.
<div style="text-align: center;">
     <img src="./Assign_Assets/mozi.png" alt="Film List">
     (8. ábra)
</div>

## Kód kapcsolatos dokumentáció
### Frontend Kód leírás
Az oldalok modulárisan épülnek különböző komponensek által, és ha valami változik az oldalon elég csak azt az egy komponenst renderelni és nem kell az egész oldalt ha csak 1 érték változik meg például az oldalon. Context-ekben tárolom az értékeket az felhasználórol illetve különböző alerteknek ad helyet. Az alert box-om nem más mint egy snackbar ami Bejlenetkzeés vagy valami adat frissítés során vagy törléskor fog megjelenni ha sikeres volt hanem és egy üzenet fog meg jelenni benne.
<div style="text-align: center;">
     <img src="./Assign_Assets/Alert.png" alt="Alerts">
     (9. ábra) Alerts
</div>

ilyen allertek jelennek meg a sncakbar-ban ami 5 sec után eltűnik a képernyőröl.
``` 
<Snackbar 
            open={isOpen} 
            autoHideDuration={5000} 
            onClose={handleClose} 
            anchorOrigin={{
                vertical:'top',
                horizontal:'center'
            }}>
            <Alert severity={severity}>{msg}</Alert>
        </Snackbar>
```
Ebben az implementációban látható hogyan is hoztam létre a fentebb említet snackbar-okat.
Ez az alert külön komponensként van tárolva és csak property-ken keresztül kerül beállításra az egyes mezők.

Ahogy minden input field is kivan szedve külön komponensként mert többször kerül felhasználásra, illetve ha meg változik valami érték benne elég azt az egy komponenst változtatni és nem kell újra renderelni az egész oldalt ahogy már említettük.
```
const Input = ({label, ...otherProps}) =>{
    return(
    <div className='Input-container'>
       <input 
            className='Input-box'
            {...otherProps}
        />
        {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } Input-box-label`}
        >
          {label}
        </label>
      )}
    </div>
)};
```
Ahogy a kódban látható ha a otherProps.value.length 0 akkor a label szövegével nem csinálunk semmit marad a helyén, de ha a **Length** értéke nagyobb mint **nulla** **(otherProps.value.length > 0)** akkor a label szövegünk kap egy **shrink** classname értéket amit a styles.scss fileba meghatároztunk a fentebb említett kódba nem látszik mert annyira nem fontos most a számunkra.


Ezek a kódok voltak amelyek érdekesek voltak számunkra mert a többi oldalt felhasználásra kerülnek a gombok lennének még érdekesek a számunkra de hasonlít a megoládsa a fentebb említett input mezőkre.

**A különböző jeleket/karaktereket az alábbi oldalról került felhasználásra: https://mui.com/material-ui/material-icons/**

### Backend Kód leírás
A backend szerverünk egy **Typescript Fastify** szerver, és az adatbázisunk egy Mongodb adatbázis ami a felhőbe és bárhonnan elérhető. A frontend oldalról különböző API hívásokkal érjük el a backend szerver külnböző kontroller függvényeit ami valamilyen műveltet végez ez a kérés alapján beérekezett paramétereken keresztül. 4 féle metódust fogad a **GET, POST, UPDATE, DELETE**  ezt a 4 tudja csak kezelni. Különböző interface-k kerültek implenetálásra hogy milyen adatok érkeznek a frotend felől és miket tartalamazhat a **Body vagy a HEAD** paraméter.
```
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
```
Ezeket az interfaceket hoztuk létre valamelyik függvény fogja ezeket felhasználni. Például vannak ezeke a változó?: típus-nál a kérdő jel **opciónális** szóval nem biztos hogy fog szerepelni az adott Body-ban vagy Head-ben.

Itt az Auth.Controller.ts file-t fogjuk elemezni hogyan is épül ez fel.
```
import { FastifyReply, FastifyRequest } from 'fastify';

const jwt = require("jsonwebtoken");
const member = require("../../model/user.scehma");

const authenticationwithjwttoken = async(req: FastifyRequest, rep: FastifyReply) =>{
  
  const cookie = req.headers['cookie'];

  const token = cookie?.split('=')[1];

  try{
    if(!token){
      return rep.code(400).send({msg: "Hiányzik a token!"});
    }

    const decoded = jwt.verify(token, process.env.MY_SECRECT_TOKEN);

    const result = await member.findOne({email: decoded.Email});

    if(!result) return rep.code(400).send({msg: "Sikertelen azonosítás"});

  }catch(error){
    return rep.code(401).send({msg: error});
  }
}

module.exports = {
  authenticationwithjwttoken
}
```

Itt a fejlécben érkezik egy süti ami azonosítja a bejelentkezett felhasználót, itt a **jsonwebtoken**-t használtuk fel a titkosításra. Ha sikeres volt az authentikáció akkor a tovább halad majd a backend és a következő függvényt fogja végre hajtani mert nem tér vissza semmilyen hiba üzenettel. Itt látszik egy példán hogy melyik kontroller fogja majd feldolgozni a beérkezett kérést. Itt egy példa file tartalma:
```
import { FastifyInstance } from "fastify";

const login = require('../controller/login/login.controller');
const signup = require('../controller/sign-up/sign-up.controller');
const auth = require('../controller/Auth/Auth.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
  fastify.post('/login',{handler: login.loginCtrl})
  fastify.post('/sign-up',{handler: signup.signupnCtrl})
  fastify.put('/update-data',{preHandler: auth.authenticationwithjwttoken, handler: login.updateAcc})
  fastify.delete('/delete-account',{preHandler: auth.authenticationwithjwttoken, handler: login.deleteAcc})
  fastify.post('/options',{preHandler: auth.authenticationwithjwttoken, handler: login.getAccData})
  }
```

A következő kép fogja bemutatni ezt a prehandler-t és a handler-t több ilyen ehez hasonló hookok vannak még ezeken kívül.
<div style="text-align: center;">
     <img src="./Assign_Assets/lifeCycle.png" alt="lifeCycle">
     (10. ábra) Fastify-lifeCycle
</div>


A végén bemutatásra kerül még egy file ez a login.controller.ts ebbena file-ban kerül feldolgozásra a felhasználó adatai szóval itt a **Regisztráció, Fiók törlés, Frissítés, Bejelentkezések** feldolgozása.
```import { FastifyReply, FastifyRequest } from 'fastify';
import { IBodyLogin, IbodyLoginString } from '../../interfaces/request.interfaces';

const login = require('../../model/user.scehma');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


const loginCtrl = async(req: FastifyRequest<{Body: IBodyLogin}>, rep: FastifyReply) =>{
    const {email, password} = req.body;

    const result = await login.findOne({email: email});

    if(!result) return rep.code(404).send('Nincs ilyen Email cím!');
    if(result.password !== md5(password)) return rep.code(400).send('Hibás jelszó');

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

    rep.setCookie('user-access', token,{
      path:'http://localhost:5000/',
      sameSite: 'strict',
      maxAge: 3600, 
      httpOnly: true,
      secure: false,
    })

    rep.code(200).header('Access-Control-Expose-Headers', 'set-cookie').send({ID: result._id, Username: result.Uname, Email: result.email});
};

const deleteAcc = async (req: FastifyRequest, rep: FastifyReply) => {

  const cookie = req.headers['cookie'];

  const token = cookie?.split('=')[1];

  const decoded = jwt.verify(token, process.env.MY_SECRECT_TOKEN);

  const result = await login.deleteOne({email: decoded.Email});

  if(result.deletedCount === 0) return rep.code(400).send({msg: 'Hiba történt...'});

  rep.code(200).send({msg: 'Sikeres fiók törlés!'});
  
};

const updateAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {
  const { newEmail, oldEmail, oldPassword, newPassword } = req.body;

  const result = await login.findOne({email: oldEmail});

  if(!result) return rep.code(400).send({msg: 'Hiba történt...'});

  if(newEmail !== '') {
    const update = await login.updateOne({email: oldEmail}, {email: newEmail}, {upsert: false})
    if(!update) return rep.code(400).send({msg: 'Hiba történt...'})
  }

  if(oldPassword !== '') {
    if(md5(oldPassword) !== result.password) return rep.code(400).send({msg: 'Hibás jelszó!'})

    if(newPassword !== '') {
      const update = await login.updateOne({email: oldEmail}, {password: md5(newPassword)}, {upsert: false})
      if(!update) return rep.code(400).send({msg: 'Hiba történt...'})
    }
  }

  const payload = {
    Email: newEmail !== '' ? newEmail : result.email,
    Password: newPassword !== '' ? newPassword: result.password,
    _id: result._id
  };
  
  const token = jwt.sign(
    payload,
    process.env.MY_SECRECT_TOKEN,
    {expiresIn: 60 * 60 * 1 } //1 óra
  )

  rep.setCookie('user-access', token,{
    path:'/',
    sameSite: 'strict',
    maxAge: 3600, 
    httpOnly: true,
    secure: false,
  })

  newEmail ? rep.code(200).header('Access-Control-Expose-Headers', 'set-cookie').send({msg: 'Sikeres változtatás', email: newEmail}) : rep.code(200).header('Access-Control-Expose-Headers', 'set-cookie').send({msg: 'Sikeres változtatás'});
};

const getAccData = async (req: FastifyRequest, rep: FastifyReply) => {

  const token = req.headers['cookie'];

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
```

A fent leírt kód az első függvény a felhasználót azonosítja a bejelentkezésnél ha sikeres volt akkor a backend szerver csinál egy sütit amit majd a felhasználónak küld vissza majd.
```
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

    rep.setCookie('user-access', token,{
      path:'http://localhost:5000/',
      sameSite: 'strict',
      maxAge: 3600, 
      httpOnly: true,
      secure: false,
    })
```

Elöször beállítok egy payload-ot ami tartalmazza a felhasználó adatait amikor hitelesítésnél vissa fejtve ezt a payload-ot kapjuk majd vissza.
A token változó értéke fogja tartalmazza a sütinek a value értékét amit a frontend oldalon is láthatunk. A süti neve látható majd **user-access** névre fog majd hallgatni, illetve a value értéke a token lesz ahogy már említettem illetve különböző paramétereket de ezek már nem kötelezőek.

A korábban említett interface-k itt látható is hogy hogyan kerülnek felhasználásra:
```
const updateAcc = async (req: FastifyRequest<{Body: IbodyLoginString}>, rep: FastifyReply) => {...}
```

Itt látható hogy **Body**-ban lévő értékek ilyenek lehetnek benne amit a **IbodyLoginString** tartalmaz és azok az értékek olvashatóak ki például így:
```
const {email, password} = req.body;
```

Itt a req.body-ból a email és a password mező értékeit olvasom ki ami értkeezett a frontend felől.