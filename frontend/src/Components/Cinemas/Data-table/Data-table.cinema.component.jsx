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
            
            
        </table>
    </div>
)};

export default Datatable;