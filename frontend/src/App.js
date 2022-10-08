import { Routes, Route} from "react-router-dom";

import Navigation from './routes/Navigation/Navigation.routes';
import Home from './routes/Home/Home.routes';
import Films from './routes/Films/Film.route';
import Cinemas from './routes/Cinemas/Cinema.route';

const App = () =>(
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="Vetítés" element={<Films />} />
      <Route path="Mozi" element={<Cinemas />} />
    </Route>
  </Routes>
);


export default App;
