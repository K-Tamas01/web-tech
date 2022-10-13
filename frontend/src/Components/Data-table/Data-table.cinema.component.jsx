import './Data-table.cinema.component.styles.scss';

const Datatable = ({Cinema}) =>{

    return(
    <div className='table-container'>
        <table>
            <tbody>
                <tr>
                    <th>Mozi neve</th>
                    <th>Város</th>
                    <th>Cím</th>
                    <th>Nyitva tartás</th>
                </tr>
                {
                    Cinema.map((cinema, index) =>(
                        <tr key={index}>
                            <td key={index}>{cinema.Cinemaname}</td>
                            <td>{cinema.City}</td>
                            <td>{cinema.Address}</td>
                            <td>
                                <ul>
                                    {cinema.OpeningHours.map((opening, index) =>(
                                        <li key={index}>{opening}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)};

export default Datatable;