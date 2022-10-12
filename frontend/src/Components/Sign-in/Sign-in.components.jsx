import './Sign-in.components.styles.scss';

import InputForm from '../input-fields/Input-fields.component';

const SignInForm = () => {
    return(
        <div className='sign-in-container'>
            <h2>Bejelentkezés</h2>
            
            <InputForm
                label="Email"
                type='Email'
            />
            <InputForm
                label="Jelszó"
                type='Password'
            />
        </div>
)}

export default SignInForm;