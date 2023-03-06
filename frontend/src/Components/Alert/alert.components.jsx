import { useContext } from "react";
import { AlertBoxContext } from "../../Context/alert.context";

import { Alert, Snackbar } from '@mui/material';

const AlertBox = () => {
    const {isOpen, setIsOpen} = useContext(AlertBoxContext);

    const handleClose = () => {
        setIsOpen(false)
    }

    console.log(isOpen)

    return(
        <Snackbar 
            open={isOpen} 
            autoHideDuration={5000} 
            onClose={handleClose} 
            anchorOrigin={{
                vertical:'top',
                horizontal:'center'
            }}>
            <Alert severity="error">Teszt</Alert>
        </Snackbar>
)}

export default AlertBox;