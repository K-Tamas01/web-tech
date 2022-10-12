import './input-fields.component.styles.scss';

const Input = ({label, ...otherProps}) =>{
    return(
    <div className='Input-container'>
       <input 
            className='Input-box'
            {...otherProps}
        />
        {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } Input-box-label`}
        >
          {label}
        </label>
      )}
    </div>
)};

export default Input;