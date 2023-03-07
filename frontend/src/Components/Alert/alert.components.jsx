import { useContext } from "react";
import { AlertBoxContext } from "../../Context/alert.context";

import { Alert, Snackbar } from '@mui/material';

const AlertBox = ({ msg, severity}) => {
    const {isOpen, setIsOpen} = useContext(AlertBoxContext);

    const handleClose = () => {
        setIsOpen(false)
    }

    return(
        <Snackbar 
            open={isOpen} 
            autoHideDuration={5000} 
            onClose={handleClose} 
            anchorOrigin={{
                vertical:'top',
                horizontal:'center'
            }}>
            <Alert severity={severity}>{msg}</Alert>
        </Snackbar>
)}

export default AlertBox;