import './buttons.component.styles.scss';


const Buttons = ({children}) => {
    return(
    <button className='button-container'>
        {children}
    </button>
)};

export default Buttons;