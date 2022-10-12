import './Sign-in.components.styles.scss';

import { useState } from "react";

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            
            resetFormField();
            


            
        } catch (error) {
            switch (error.code) {
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
                console.log(error);
            }
          }

        
        
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className='sign-in-container'>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleSubmit}>
                <InputForm
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <InputForm
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <Buttons type="submit">Bejelentkezés</Buttons>
            </form>
        </div>
)}

export default SignInForm;