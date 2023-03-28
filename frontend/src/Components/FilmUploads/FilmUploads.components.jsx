import './FilmUploads.components.styles.scss';

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';

import { AlertBoxContext } from '../../Context/alert.context';

import { useState, useContext } from "react";

const defaultFormFields = {
    title: '',
    length: '',
    description: '',
    age_restriced: '',
    age_limit: '',
    date: '',
    time: '',
    room: '',
    seats: '',
    address: '',
    address2: '',
    price: ''
}

const FilmUploads = ({messageText, messageType}) => {
    const {setIsOpen} = useContext(AlertBoxContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { 
        title,
        length,
        description,
        age_restriced,
        age_limit,
        date,
        time,
        room,
        seats,
        address,
        address2,
        price
    } = defaultFormFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const createMessage = (msg, type) => {
        setIsOpen(true);
        messageText(msg);
        messageType(type);
    }

    const handleCreateSubmit = async (event) => {
    }
    const handleUpdateSubmit = async (event) => {
    }
    const handleDeleteSubmit = async (event) => {
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='table-container'>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleCreateSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <InputForm
                                    label='cím'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='title'
                                    value={title}
                                />
                            </td>
                            <td>
                                <InputForm
                                    label='Hossz (Percben)'
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='length'
                                    value={length}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputForm
                                    label='cím'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='title'
                                    value={title}
                                />
                            </td>
                            <td>
                                <InputForm
                                    label='Hossz (Percben)'
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='length'
                                    value={length}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Buttons type="submit" classname={'button-container'}>Kitűzés</Buttons>
            </form>
            <form onSubmit={handleUpdateSubmit}>
                <div className='buttons'>
                    <Buttons type="submit" classname={'button-container'}>Módosítás</Buttons>
                </div>
            </form>
            <form onSubmit={handleDeleteSubmit}>
                <div className='buttons'>
                    <Buttons type="submit" classname={'button-container-delete'}>Törlés</Buttons>
                </div>
            </form>
        </div>
    )

}
         
export default FilmUploads;