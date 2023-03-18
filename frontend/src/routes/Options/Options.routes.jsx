import OptionsPage from '../../Components/Options/options.components';

const Options = ({messageText, messageType}) =>{
    return(
        <div>
            <OptionsPage messageText={messageText} messageType={messageType} />
        </div>
    )
}

export default Options;