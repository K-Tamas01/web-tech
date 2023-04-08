import './buttons.component.styles.scss';


const Buttons = ({children, classname, name}) => {
    return(
    <button className={classname} name={name}>
        {children}
    </button>
)};

export default Buttons;