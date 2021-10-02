import React, {useEffect, useState} from "react";
import axios from "axios"
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {FormHelperText} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5E4FA2',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,

    },
}))(TableCell);
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>


                    <CloseIcon/>

                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function AssignSupplier(props) {
    const [open, setOpen] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //snack Bar
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };



    const orderId=props.orderId;

    const [itemList, setItemList] = useState([]);


    function onSubmit(e) {

        e.preventDefault()

        const OrderObject = {

        }

        alert("clicked")
        axios.post(`http://localhost:8020/reply/order`, OrderObject)
            .then((res) => {

            })
            .catch(error => {
                alert(error)
            })


    }


    return (

        <div style={{zIndex: "-99"}}>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success">
                    Inserted Successfully!
                </Alert>
            </Snackbar>

            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Assign Order
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Send your Budget
                    <FormHelperText style={{color: "red"}}>{helperText}</FormHelperText>
                </DialogTitle>
                <form onSubmit={onSubmit}>

                    <DialogContent dividers>

                        {orderId}

                            <div>
                                <textarea
                                    style={{width: "550px", height: "150px"}}
                                    type='text'
                                    color="secondary"
                                    label="Write your Estimation "
                                    placeholder="Please Enter Message Here............"
                                    onChange={(event) => {
                                        setHelperText(' ');

                                    }}
                                    fullWidth/>
                            </div>

                            <div>
                                <TextField
                                    type='number'
                                    color="secondary"
                                    label="Enter your Total Budget"
                                    placeholder="Rs. 25000/="
                                    onChange={(event) => {
                                        setHelperText(' ');
                                        // setCost(event.target.value)
                                    }}
                                    fullWidth/>
                            </div>





                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Send
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </div>
    )
}