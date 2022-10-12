import './Sign-up.components.styles.scss';

import InputForm from '../input-fields/Input-fields.component';

const SignUpForm = () =>{
    return(
        <div className='sign-in-container'>
            <h2>Regisztráció</h2>
            
            <InputForm
                label="Email"
                type='Email'
            />
            
            <InputForm
                label="Jelszó"
                type='Password'
            />

             <InputForm
                label="Jelszó-Újra"
                type='Password'
            />
        </div>
)}

export default SignUpForm;