import './Cinema.component.styles.scss';

import { useEffect, useState } from 'react';

import Datatable from './Data-table/Data-table.cinema.component';
import Search from './Search/Search.ciname.component';


const Cinema = () =>{

    const [searchField, setSearchField] = useState('');
    const [Cinemas, setCinemas] = useState([]);
    const [fileteredCinemas, setFileteredCinemas] = useState([]);

    const onSearchChange = (event) =>{
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    useEffect(() =>{
        const newFilteredCinema = Cinemas.filter((cinema) =>{
            return cinema.City.toLowerCase().includes(searchField);
        });

        setFileteredCinemas(newFilteredCinema);
    },[Cinemas,searchField]);

    useEffect(() =>{
        fetch('http://localhost:3000/cinema')
        .then((response) => response.json())
        .then((cinema) => setCinemas(cinema))
    },[])


    return(
    <div className='Content-container'>
        <h1>Válasszon Várost:</h1>
        <Search onChangeHandler={onSearchChange}/>
        <Datatable Cinema={fileteredCinemas}/>
    </div>
)};

export default Cinema;