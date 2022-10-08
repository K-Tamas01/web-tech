import { Outlet } from 'react-router-dom';

import FilmPage from '../../Components/Films/Film.component';

const Film = () =>{
  return(
    <div>
      <Outlet />
      <FilmPage />
    </div>
  )
}

export default Film;