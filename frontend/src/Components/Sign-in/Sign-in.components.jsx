import './Sign-in.components.styles.scss';

import { useState, useContext } from "react";
import { UserContext } from '../../Context/user.context';
import { AlertBoxContext } from "../../Context/alert.context";

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';
import AlertBox from '../Alert/alert.components';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const {setUser} = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const {setIsOpen} = useContext(AlertBoxContext);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const createMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsOpen(true);

        fetch('http://localhost:3000/login',{ 
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(formFields)
        })
        .then((response) => {if(!response.ok){return response.text().then(text => {throw new Error(text)})} response.json()})
        .then((data) => setUser({name: data.Username, id: data.ID, email: data.Email}), createMessage("Sikeress Bejelentkezés", "success"))
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
                <Buttons type="submit">Bejelentkezés</Buttons>
            </form>
            <AlertBox msg={message} severity={messageType}/>
        </div>
)}

export default SignInForm;