import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';


const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
//   error: {
//     backgroundColor: theme.palette.error.dark,
//   },
//   info: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   warning: {
//     backgroundColor: amber[700],
//   },
//   icon: {
//     fontSize: 20,
//   },
//   iconVariant: {
//     opacity: 0.9,
//     marginRight: theme.spacing(1),
//   },
//   message: {
//     display: 'flex',
//     alignItems: 'center',
//   },
}));


 function MySnackbarContentWrapper (props){
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;

  return(
    <SnackbarContent
    className={clsx(classes[variant], className)}
    aria-describedby="client-snackbar"
    message={
      <span>
        {message}
      </span>
    }
    action={[
      <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
        <CloseIcon />
      </IconButton>,
    ]}
    {...other}
  />
  )

}

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Submit
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        backgroundColor='red'
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="This is a success message!"
         
          
        />
         {/* <MySnackbarContentWrapper
        variant="error"
        className={classes.margin}
        autoHideDuration={2000}
        message="This is an error message!"
        onClose={handleClose}
      /> */}

      {/* <MySnackbarContentWrapper
        variant="warning"
        className={classes.margin}
        autoHideDuration={2000}
        message="This is a warning message!"
        onClose={handleClose}
      /> */}
        {/* <MySnackbarContentWrapper
        variant="info"
        className={classes.margin}
        message="This is an information message!"
        autoHideDuration={2000}
        onClose={handleClose}
      /> */}

      </Snackbar>
 </div>
)}