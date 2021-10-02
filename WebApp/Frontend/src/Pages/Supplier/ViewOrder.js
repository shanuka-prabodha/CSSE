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


export default function ViewOrder(props) {
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


    //set Data to useStates
    const [riderName, setRiderName] = useState("");
    const [nic, setNic] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [cost, setCost] = useState("");

    const [itemList, setItemList] = useState([]);


    useEffect(() => {

        const orderid = props.orderid;
        axios.get(`http://localhost:8020/order/find/${orderid}`)
            .then((res) => {
                console.log(res.data)
                setItemList(res.data)

            })
            .catch(error => {
                alert(error)
            })
    }, [])

    function onSubmit(e) {

        e.preventDefault()
        setOpen(false);

        // const OrderObject = {
        //     orderId: props.orderid,
        //     supplierId: props.supplierid,
        //     message: message,
        //     EstimateCost: cost
        // }
        //
        // alert("clicked")
        // axios.post(`http://localhost:8020/reply/order`, OrderObject)
        //     .then((res) => {
        //         // console.log(res.data)
        //         // setItemList(res.data)
        //
        //
        //     })
        //     .catch(error => {
        //         alert(error)
        //     })


    }

    let count = 0;
    return (

        <div style={{zIndex: "-99"}}>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success">
                    Inserted Successfully!
                </Alert>
            </Snackbar>

            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                View Order
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Send your Budget
                    <FormHelperText style={{color: "red"}}>{helperText}</FormHelperText>
                </DialogTitle>
                <form onSubmit={onSubmit}>

                    <DialogContent dividers>


                        <div style={{width: "550px", height: "250px"}}>


                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>ID</StyledTableCell>
                                            <StyledTableCell>Item Name</StyledTableCell>
                                            {/*<StyledTableCell>Unit Cost</StyledTableCell>*/}
                                            <StyledTableCell>Quantity</StyledTableCell>


                                        </TableRow>
                                    </TableHead>
                                    <TableBody>


                                        {
                                            itemList.map(itemList => (
                                                <TableRow key={itemList.itemName}>
                                                    {/*<TableCell>{itemList.itemName}</TableCell>*/}
                                                    <TableCell>{count = count + 1}</TableCell>
                                                    <TableCell>{itemList.name}</TableCell>
                                                    {/*<TableCell>{itemList.unitPrice}</TableCell>*/}
                                                    <TableCell>{itemList.quantity}</TableCell>


                                                </TableRow>
                                            ))
                                        }


                                    </TableBody>
                                </Table>
                            </TableContainer>


                            {/*<div>*/}
                            {/*    <textarea*/}
                            {/*        style={{width: "550px", height: "250px"}}*/}
                            {/*        type='text'*/}
                            {/*        color="secondary"*/}
                            {/*        label="Write your Estimation "*/}
                            {/*        placeholder="Write your Estimation Budget Here............"*/}
                            {/*        onChange={(event) => {*/}
                            {/*            setHelperText(' ');*/}
                            {/*            setMessage(event.target.value)*/}
                            {/*        }}*/}
                            {/*        fullWidth/>*/}
                            {/*</div>*/}

                            {/*<div>*/}
                            {/*    <TextField*/}
                            {/*        type='number'*/}
                            {/*        color="secondary"*/}
                            {/*        label="Enter your Total Budget"*/}
                            {/*        placeholder="Rs. 25000/="*/}
                            {/*        onChange={(event) => {*/}
                            {/*            setHelperText(' ');*/}
                            {/*            setCost(event.target.value)*/}
                            {/*        }}*/}
                            {/*        fullWidth/>*/}
                            {/*</div>*/}


                            {/*<div>*/}
                            {/*    <TextField*/}
                            {/*        color="secondary"*/}
                            {/*        type='text'*/}
                            {/*        inputProps={{pattern: "[A-Za-z0-9- ]{1,75}"}}*/}
                            {/*        label="Vehicle Number"*/}
                            {/*        placeholder="PA-5684"*/}
                            {/*        onChange={(event) => {*/}
                            {/*            setHelperText(' ');*/}
                            {/*            setNumber(event.target.value)*/}
                            {/*        }}*/}
                            {/*        fullWidth*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>


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