import './Sign-in.components.styles.scss';

import { useState, useContext } from "react";
import { UserContext } from '../../Context/user.context';
import { useNavigate } from 'react-router-dom';

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';

import { AlertBoxContext } from '../../Context/alert.context';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = ({messageText, messageType}) => {
    const {setIsOpen} = useContext(AlertBoxContext);
    const {setUser} = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const navigate = useNavigate();

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const createMessage = (msg, type) => {
        setIsOpen(true);
        messageText(msg);
        messageType(type);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/login',{ 
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(formFields)
        })
        .then((response) => {
            if(!response.ok) { 
                return response.text().then(text => {throw new Error(text)})} 
            else
            return response.json();
        })
        .then(data => setUser({name: data.Username, email: data.Email, id: data.ID}), createMessage('Sikeress bejelentkezés!', 'success'), navigate('/', {replace: true}))
        .catch((error) => createMessage(error.toString().split("Error:").join().replace(",",'').trimStart(), 'error'))
        .finally(resetFormField())
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
                <Buttons type="submit" classname={'button-container'}>Bejelentkezés</Buttons>
            </form>
            
        </div>
)}

export default SignInForm;