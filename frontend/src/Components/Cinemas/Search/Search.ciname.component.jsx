import './Search.ciname.component.styles.scss';

const Search = ({onChangeHandler}) =>{
    return(
    <div className='Search-container'>
       <input 
            className='search-box'
            type="search"
            onChange={onChangeHandler}
        />
        <label className='search-box-label'>Írd be a város nevét:</label>
    </div>
)};

export default Search;