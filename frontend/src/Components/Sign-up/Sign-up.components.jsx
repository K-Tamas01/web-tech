import './Sign-up.components.styles.scss';

import { useState, useContext } from "react";
import { AlertBoxContext } from "../../Context/alert.context";

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';

const defaultFormFields = {
    email: '',
    Uname:'',
    password: '',
    confirmPassword: ''
}

const SignUpForm = ({messageText, messageType}) =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, Uname, password, confirmPassword} = formFields;
    const {setIsOpen} = useContext(AlertBoxContext);

    const createMessage = (msg) => {
        setIsOpen(true);
        messageText(msg)
    }

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {

        if (password !== confirmPassword) {
            messageType('error');
            createMessage("A jelszavak nem egyeznek!");
            return;
          }

        fetch("http://localhost:3000/sign-up", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            mode: "cors",
            body: JSON.stringify(formFields)
        })
        .then((response) => {if(response.ok)
                messageType('success')
            else
                messageType('error')
            return response.json()
            })
        .then((data) => createMessage(data.msg))

        resetFormField(); 
        
        event.preventDefault();
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };


    return(
        <div className='sign-in-container'>
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit}>
                <InputForm
                    label="Email"
                    type='Email'
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                 <InputForm
                    label="Teljes név"
                    type='Name'
                    required
                    onChange={handleChange}
                    name="Uname"
                    value={Uname}
                />
            
                <InputForm
                    label="Jelszó"
                    type='Password'
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <InputForm
                    label="Jelszó-Újra"
                    type='Password'
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Buttons type='submit' classname={'button-container'}>Regisztráció</Buttons>
            </form>
        </div>
)}

export default SignUpForm;