import './FilmUploads.components.styles.scss';

import InputForm from '../input-fields/Input-fields.component';
import Buttons from '../buttons/buttons.component';
import SelectList from '../Select/Select.components';

import { AlertBoxContext } from '../../Context/alert.context';

import { useState, useContext, useEffect } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';

const defaultFormFields = {
    _id: '',
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
    const [isSelected, setIsSelected] = useState(false);
    const [reload, setReload] = useState(true);
    const [options, setOptions] = useState([]);
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
    } = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const createMessage = (msg, type) => {
        setIsOpen(true);
        messageText(msg);
        messageType(type);
    }

    useEffect(() => {

        if(reload){
            fetch('http://localhost:3000/films', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'include'
            })
            .then((response) => response.json())
            .then((data) => {setFilms(data); setOptions(data.map(film => ({label: film.title, value: film})));});
            setReload(false)
        }
    }, [reload])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const modify = event.nativeEvent.submitter.name;

        switch(modify){
            case 'update':{
                fetch('http://localhost:3000/update-film', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(formFields)
                })
                .then((response) => {if(response.ok){return createMessage('Sikeres frissités', 'success')} else {return response.text().then(text => {throw new Error(text)})}})
                .catch((error) => {createMessage(error.toString().split("Error:").join().replace(",",'').trimStart(), 'error')})
                break;
            }
            case 'delete':{
                fetch('http://localhost:3000/remove-film', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(formFields)
                })
                .then((response) => {if(response.ok){return createMessage('Sikeres törlés', 'success')} else {return response.text().then(text => {throw new Error(text)})}})
                .catch((error) => {createMessage(error.toString().split("Error:").join().replace(",",'').trimStart(), 'error')})
                setReload(true)
                break;
            }
            default:{
                fetch('http://localhost:3000/add-films',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(formFields)
                })
                .then((response) => {if(response.ok){return createMessage('Sikeres adathozzáadás', 'success')} else {response.json()}})
                .catch((error) => {createMessage(error.toString().split("Error:").join().replace(",",'').trimStart(), 'error')})
                setReload(true)
                break;
            }
        }
        resetFormField();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className='table-container'>
            <h2>Film feltöltés/szerkesztés</h2>
            <div className='film-select'>
                {!films ?
                 <SelectList 
                    label={'Válasz filmet'}
                    options={[{label: '', value:''}]}
                    value={''}
                /> : <SelectList 
                        label={'Válasz filmet'}
                        options={options}
                        value={title}
                        onChange={(val) => {setFormFields(val); setIsSelected(true)}}
                    />
                }
            </div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <InputForm
                                    label='Cím'
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
                                            onChange={(val) => {setFormFields({...formFields, age_restriced: val})}}
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
                                            value={age_limit}
                                            onChange={(val) => {setFormFields({...formFields, age_limit: val})}}
                                    />
                                </div>
                            </td>
                            <td>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        label='Válasz dátumot'
                                        value={date ? dayjs(date) : dayjs('1980.01.01')}
                                        onChange={(val) => {setFormFields({...formFields, date: val}); console.log(formFields)}}
                                        name='date'
                                        required
                                    />
                                </LocalizationProvider>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileTimePicker 
                                    label='Válasz időt'
                                    value={time ? dayjs(time) : dayjs('1980.01.01')}
                                    onChange={(val) => {setFormFields({...formFields, time: val})}}
                                    name='time'
                                    required
                                />
                                </LocalizationProvider>
                            </td>
                            <td>
                                <InputForm
                                    label='Terem'
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='room'
                                    value={room}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputForm
                                    label='Helyek száma'
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='seats'
                                    value={seats}
                                />
                            </td>
                            <td>
                                <InputForm
                                    label='Város'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='address'
                                    value={address}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputForm
                                    label='utca'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='address2'
                                    value={address2}
                                />
                            </td>
                            <td>
                                <InputForm
                                    label='ár'
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='price'
                                    value={price}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {!isSelected ? (
                    <Buttons type="submit" classname={'button-container'} name='create' >Kitűzés</Buttons>
                ):(
                <div className='inline-forms'>
                    <div className='button'>
                        <Buttons type="submit" classname={'button-container'} name='update' >Módosítás</Buttons>
                    </div>
                    <div className='button'>
                    <Buttons type="submit" classname={'button-container-delete'} name='delete' >Törlés</Buttons>
                    </div>
                </div>
                )}
            </form>
            
            
        </div>
    )

}
         
export default FilmUploads;