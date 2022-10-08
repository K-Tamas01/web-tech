import { Outlet } from 'react-router-dom';

import CinemaPage from '../../Components/Cinemas/Cinema.component';

const Cinema = () =>{
  return(
    <div>
      <Outlet />
      <CinemaPage />
    </div>
  )
}

export default Cinema;