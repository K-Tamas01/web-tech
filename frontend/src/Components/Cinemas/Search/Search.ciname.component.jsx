import './Search.ciname.component.styles.scss';

const Search = ({onChangeHandler}) =>{
    return(
    <div className='Search-container'>
       <input 
            className='search-box'
            placeholder='Írd be a város nevét:'
            type="search"
            onChange={onChangeHandler}
        />
    </div>
)};

export default Search;