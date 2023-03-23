import { Routes, Route} from "react-router-dom";

import Navigation from './routes/Navigation/Navigation.routes';
import Home from './routes/Home/Home.routes';
import Films from './routes/Films/Film.route';
import Cinemas from './routes/Cinemas/Cinema.route';
import Auth from './routes/Auth/Auth.routes';
import Options from './routes/Options/Options.routes';
import FilmUplaod from "./routes/Film-upload/FilmUpload.routes";

import AlertBox from './Components/Alert/alert.components';

import { useState } from "react";

const App = () =>{
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const getMessage = (message) => {
    setMessage(message)
  }

  const getMessageType = (type) => {
    setMessageType(type)
  }

  return(
    <div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Vetítés" element={<Films />} />
        <Route path="Mozi" element={<Cinemas />} />
        <Route path="Auth" element={<Auth messageText={getMessage} messageType={getMessageType} />} />
        <Route path="Films-form" element={<FilmUplaod messageText={getMessage} messageType={getMessageType} />} />
        <Route path="Options" element={<Options messageText={getMessage} messageType={getMessageType} />} />
      </Route>
    </Routes>
    <AlertBox msg={message} severity={messageType}/>
    </div>
  )
};


export default App;
