import './Film.component.styles.scss';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Film = () =>{

    const [datas, setDatas] = useState([]);
    const columns = [
        {id: 1, field: 'title', headerName: 'Cím', width: 140},
        {id: 2, field: 'length', headerName: 'Hossz', width: 50},
        {id: 3, field: 'description', headerName: 'Leírás', width: 140},
        {id: 4, field: 'age_restriced', headerName: 'Korhatáros', width: 70},
        {id: 5, field: 'age_limit', headerName: 'Korhatár', width: 70},
        {id: 6, field: 'date', headerName: 'Dátum', width: 130},
        {id: 7, field: 'time', headerName: 'Idő', width: 70},
        {id: 8, field: 'room', headerName: 'Terem', width: 70},
        {id: 9, field: 'seats', headerName: 'Helyek', width: 70},
        {id: 10, field: 'address', headerName: 'Város', width: 130},
        {id: 11, field: 'address2', headerName: 'Utca', width: 150},
        {id: 12, field: 'price', headerName: 'Ár', width: 70},
    ];

    useEffect(() => {
        fetch('http://localhost:3000/films', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((data) => {setDatas(data)})
    }, [])

    const rows = datas.map(row => ({
        id: row._id,
        title: row.title,
        length: row.length,
        description: row.description,
        age_restriced: row.age_restriced ? 'igen' : 'nem' ,
        age_limit: row.age_limit === 0 ? 'Nincs' : row.age_limit,
        date: row.date.split('T')[0],
        time: row.time.split('T')[1].split('.')[0].split(':00:').join(':'),
        room: row.room,
        seats: row.seats,
        address: row.address,
        address2: row.address2,
        price: row.price
    }))

    return(
    <div className='Content-container'>
        <h1>Filmek:</h1>
        <Box sx={{ height: 400, width: '100%' }}>
           <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={10}
                getRowId={datas._id}
                getRowClassName={(param) => param.index % 2 === 0 ? 'stripe-even' : 'stripe-odd' }
           />
        </Box>
    </div>
)};

export default Film;