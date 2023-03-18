import './Auth.routes.styles.scss';

import SignInPage from '../../Components/Sign-in/Sign-in.components';
import SignUpPage from '../../Components/Sign-up/Sign-up.components';

const Auth = ({messageText, messageType}) =>{
  return(
    <div className='authentication-container'>
      <SignInPage messageText={messageText} messageType={messageType} />
      <SignUpPage messageText={messageText} messageType={messageType} />
    </div>
  )
}

export default Auth;