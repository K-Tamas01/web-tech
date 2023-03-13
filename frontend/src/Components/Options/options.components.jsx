import './options.styles.scss';

import { useContext } from 'react';

import { UserContext } from '../../Context/user.context';

const OptionsPage = () => {
    const {user, setUser} = useContext(UserContext);

    return(
        <div className='Content-container'>
            
        </div>
    )
}

export default OptionsPage;