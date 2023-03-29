import './FilmUploads.components.styles.scss';

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';
import SelectList from '../Select/Select.components';

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
    const [films, setFilms] = useState(null);
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
            <h2>Film feltöltés/szerkesztés</h2>
            <div className='film-select'>
                <SelectList 
                    label={'Válasz filmet'}
                    options={[
                        { label: 'films.title', value: 'setFormFields(films)' },
                    ]}
                    value={age_restriced}
                    onChange={setFormFields}
                />
            </div>
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
                                    label='leírás'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='description'
                                    value={description}
                                />
                            </td>
                            <td>
                                <div className='data-select'>
                                    <SelectList 
                                            label={'Korhatáros'}
                                            options={[
                                                { label: 'Igen', value: true },
                                                { label: 'Nem', value: false },
                                            ]}
                                            value={age_restriced}
                                            onChange={setFormFields}
                                    />
                               </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='data-select'>
                                    <SelectList 
                                            label={'Korhatár'}
                                            options={[
                                                { label: 'Nincs', value: 0 },
                                                { label: '+6', value: 6 },
                                                { label: '+12', value: 12 },
                                                { label: '+16', value: 16 },
                                                { label: '+18', value: 18 },
                                            ]}
                                            value={age_restriced}
                                            onChange={setFormFields}
                                    />
                                </div>
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
                {!films ? (
                    <Buttons type="submit" classname={'button-container'}>Kitűzés</Buttons>
                ):(
                <div className='inline-forms'>
                    <div className='button'>
                        <Buttons type="submit" classname={'button-container'}>Módosítás</Buttons>
                    </div>
                    <div className='button'>
                    <Buttons type="submit" classname={'button-container-delete'}>Törlés</Buttons>
                    </div>
                </div>
                )}
            </form>
            
            
        </div>
    )

}
         
export default FilmUploads;