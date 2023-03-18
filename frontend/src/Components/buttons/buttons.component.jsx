import './buttons.component.styles.scss';


const Buttons = ({children, classname}) => {
    return(
    <button className={classname}>
        {children}
    </button>
)};

export default Buttons;