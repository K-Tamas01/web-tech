import './Data-table.cinema.component.styles.scss';

const Datatable = ({Cinema}) =>{

    return(
    <div className='table-container'>
        <table>
            <tr>
                <th>Mozi neve</th>
                <th>Város</th>
                <th>Cím</th>
                <th>Nyitva tartás</th>
            </tr>
            {
                Cinema.map((cinema) =>(
                    <tr>
                        <td>{cinema.Cinemaname}</td>
                        <td>{cinema.City}</td>
                        <td>{cinema.Address}</td>
                        <td>{cinema.OpeningHours}</td>
                    </tr>
                ))
            }
        </table>
    </div>
)};

export default Datatable;