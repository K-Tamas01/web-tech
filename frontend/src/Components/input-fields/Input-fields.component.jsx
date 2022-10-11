import './input-fields.component.styles.scss';

const Input = ({label, type, onChangeHandler}) =>{
    return(
    <div className='Input-container'>
       <input 
            className='Input-box'
            type={type}
            onChange={onChangeHandler}
        />
        <label className='Input-box-label'>{label}</label>
    </div>
)};

export default Input;