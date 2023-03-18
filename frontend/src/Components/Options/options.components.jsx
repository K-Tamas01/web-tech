import './options.styles.scss';

import { useContext, useState } from 'react';
import { UserContext } from '../../Context/user.context';
import { useNavigate } from 'react-router-dom';

import { AlertBoxContext } from '../../Context/alert.context';

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';

const defaultFormFields = {
    email: '',
    oldpassword: '',
    newpassword: '',
    renewpassword: '',
}

const OptionsPage = ({messageText, messageType}) => {
    const {setIsOpen} = useContext(AlertBoxContext);
    const {user, setUser} = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, oldpassword, newpassword, renewpassword} = formFields;

    const navigate = useNavigate();

    const createMessage = (msg) => {
        setIsOpen(true);
        messageText(msg);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };

    const setResponseData = (data) => {
        if(data.email) {
            setUser({email: data.email})
        }
        else if(data.msg) {
            createMessage(data.msg)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(formFields.newpassword !== formFields.renewpassword) {
            createMessage('A jelszó nem egyezik!', 'error')
            return
        }

        const data = {
            oldEmail: user.email,
            newEmail: formFields.email,
            oldPassword: formFields.oldpassword,
            newPassword: formFields.newpassword
        }

        fetch('http://localhost:3000/update-data',{
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(response.ok) messageType('success')
            else messageType('error')
            return response.json()
        })
        .then((data) => setResponseData(data))

        resetFormField();
    };

    const deleteAccountHandleSubmit = async (event) => {
        event.preventDefault();
        navigate('/', {replace: true});
    }

    return(
        <div className='Content-container'>
            <h2>Fiók adatai:</h2>
            <form onSubmit={handleSubmit}>
                <InputForm
                    label='ID'
                    type='text'
                    name='id'
                    value={user.id}
                    disabled
                />
                <InputForm
                    label='Név'
                    type='name'
                    name='name'
                    value={user.name}
                    disabled
                />
                <InputForm
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email ? email : user.email}
                />
                <InputForm
                    label='Régi jelszó'
                    type='password'
                    required={(newpassword && renewpassword ? true : false)}
                    onChange={handleChange}
                    name='oldpassword'
                    value={oldpassword}
                />
                <InputForm
                    label='Új jelszó'
                    type='password'
                    required={(oldpassword && renewpassword ? true : false)}
                    onChange={handleChange}
                    name='newpassword'
                    value={newpassword}
                />
                <InputForm
                    label='Jelszó újra'
                    type='password'
                    required={(oldpassword && newpassword ? true : false)}
                    onChange={handleChange}
                    name='renewpassword'
                    value={renewpassword}
                />
                <div className='buttons'>
                <Buttons type="submit" classname={'button-container'}>Módosítás</Buttons>
                </div>
            </form>
            <form onSubmit={deleteAccountHandleSubmit}>
                <div className='buttons'>
                <Buttons type="submit" classname={'button-container-delete'}>Fiók törlése</Buttons>
                </div>
            </form>
        </div>
    )
}

export default OptionsPage;