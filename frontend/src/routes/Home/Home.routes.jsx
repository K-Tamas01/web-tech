import { Outlet } from 'react-router-dom';

import HomePage from '../../Components/Home/Components.Home';

const Home = () =>{
  return(
    <div>
      <HomePage />
      <Outlet />
    </div>
  )
}

export default Home;