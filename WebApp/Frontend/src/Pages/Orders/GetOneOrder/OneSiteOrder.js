import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Row, CardBody, CardTitle, Container } from "reactstrap"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonToolBar from "../../../MyComponents/ButtonBar/ButtonToolBar";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useHistory } from "react-router-dom";

function createData(code, name, desc, qnty, unit, price) {
    return { code, name, desc, qnty, unit, price };
}

const rows = [
    createData('I001', 'Sand', 'Sand for laying foundation', '1 cubes', '10500/cube', 'checked'),
    createData('I251', 'Stone', 'Stones for laying foundation', '1 cubes', '10500/cube', 'checked'),
    createData('I121', 'Sand', '1/4 sheet for rofing', '1 cubes', '10500/cube', 'checked'),
    createData('I050', 'Cement', 'Cementfor laying foundationg', '1 cubes', '10500/cube', 'checked'),
    createData('I100', 'Sand', 'Iron rods 32/1', '1 cubes', '10500/cube', 'checked'),
];



const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function OneSiteOrder(props) {
    let history = useHistory();
    console.log(props.items)
    const [open, setOpen] = React.useState(false);
    const [setapp, SetApp] = React.useState("")

    const handleClickOpen = (status) => {

        SetApp(status)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {

        const state = {
            State: setapp
        }

        axios.put(`http://localhost:8020/order/state/${props.id}`, state).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })


        history.push("/siteManagerConfirmOrder")
        setOpen(false);
    };


    function setApproval(status) {


    }

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" style={{background:"linear-gradient(to bottom right, rgba(0, 0, 0, .65), rgba(0, 0, 0, .65))", color:"white"}}>
                <CardContent>
                    <Row style={{ marginLeft:"1px", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Orders Acceptance</Row>
                </CardContent>
                <CardContent>
                    <Typography variant="h5" component="div">
                        PURCHASE ORDER PO-P0014
                    </Typography>
                    <Typography style={{ paddingLeft: "70%" }}>
                        <label>Approval Status </label>
                        <label style={{ marginLeft: "10px", padding: "1px", fontWeight: "bold" }}> {props.status}</label>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{color:"white"}}>
                                <tr>
                                    <td>Due Date</td>
                                    <td>{props.duedate}</td>
                                </tr>
                                <tr>
                                    <td>Submitted Date</td>
                                    <td>{props.subdate}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{props.desc}</td>
                                </tr>
                                <tr>
                                    <td>Total Items</td>
                                    <td>{props.items.length}</td>
                                </tr>
                            </TableBody>
                        </Table>
                    </Typography>
                    <Typography style={{ float: "right" }}>
                        <Button variant="contained" style={{ margin: "5px" }} disabled={props.status == "Idle" ? false : true} onClick={e => { handleClickOpen("Received") }} >Approve</Button>
                        <Button variant="contained" style={{ margin: "5px" }} disabled={props.status == "Idle" ? false : true} onClick={e => { handleClickOpen("Declined") }}>Decline</Button> 
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Code</TableCell>
                                    <TableCell align="center">Item Name</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Unit Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.items.map((row, index) => (
                                    <TableRow
                                        key={row.code}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={e => {
                                            alert(row.name)
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">{row.discription}</TableCell>
                                        <TableCell align="center">{row.quantity}</TableCell>
                                        <TableCell align="center">{row.unitPrice}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to " + setapp + " this Order !"}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleAccept} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>

    );
}
