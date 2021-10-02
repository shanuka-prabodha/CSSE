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
import {useLocation} from "react-router-dom";

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


export default function ViewMessage(props) {
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



    const location = useLocation();

    const orderId = location.state.orderId;


    const [replyList, setReplyList] = useState([]);
    let [count, setCount] = useState('');

    let index=0;
    useEffect(() => {


        axios.get(`http://localhost:8020/reply/read-reply/${orderId}`)
            .then((res) => {
                console.log(res.data)
                setReplyList(res.data)

                if (res.data.length < 1)
                    setCount('No Supplier Assigned yet')


            })
            .catch(error => {
                alert(error)
            })
    }, [])


    function onSubmit(id, supId) {

        const OrderObject = {
            AssignSupplier: id,
            Assign: true
        }
        const SupplierObject = {
            Assign: true,
        }

        axios.put(`http://localhost:8020/order/assign/${orderId}`, OrderObject)
            .then((res) => {


                axios.put(`http://localhost:8020/reply/assign/${supId}`, SupplierObject)
                    .then((res) => {
                        alert("Assigned")
                        window.location.reload(true)
                    })

            })
            .catch(error => {
                alert(error)
            })

    }



    setOpen(false);

    return (

        <div style={{zIndex: "-99"}}>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success">
                    Inserted Successfully!
                </Alert>
            </Snackbar>

            <Button disabled={props.assign=='true'} variant="outlined" color="secondary" onClick={handleClickOpen}>
                View Replies
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    View Message
                    <FormHelperText style={{color: "red"}}>{helperText}</FormHelperText>
                </DialogTitle>
                <form onSubmit={onSubmit}>

                    <DialogContent dividers>



                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Ok
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </div>
    )
}