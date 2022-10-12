import './Auth.routes.styles.scss';

import SignInPage from '../../Components/Sign-in/Sign-in.components';
import SignUpPage from '../../Components/Sign-up/Sign-up.components';

const Auth = () =>{
  return(
    <div className='authentication-container'>
      <SignInPage />
      <SignUpPage />
    </div>
  )
}

export default Auth;