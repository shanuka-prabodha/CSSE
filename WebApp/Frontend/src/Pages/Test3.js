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
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";

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

const card = (
    <React.Fragment>
        <CardContent>
            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
            <Row style={{ paddingLeft: "2%" }}>
                <ButtonToolBar
                    allClick={e => {
                        alert("All clicked")
                    }}
                    recevedClick={e => {
                        alert("Recevied clicked")
                    }}
                    purchaseclick={e => {
                        alert("Purchase clicked")
                    }}
                    deniedClick={e => {
                        alert("Denied clicked")
                    }}
                    approveClick={e => {
                        alert("Approve clicked")
                    }}
                    pendingClick={e => {
                        alert("Pending clicked")
                    }}
                />
            </Row>
        </CardContent>
        <CardContent>
            <Typography variant="h5" component="div">
                PURCHASE ORDER PO-P0014
            </Typography>
            <Typography style={{ paddingLeft: "70%" }}>
                <label>Approval Status</label>
                <label> Pending</label>
            </Typography>
            <Typography style={{ paddingLeft: "70%" }}>
                <label>Requested by</label>
                <Button>Dinisuru</Button>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Table sx={{ maxWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <tr>
                            <td>Due Date</td>
                            <td>23/08/2021</td>
                        </tr>
                        <tr>
                            <td>Submitted Date</td>
                            <td>19/08/2021</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>These goods are on high priority for suit A</td>
                        </tr>
                        <tr>
                            <td>Total Items</td>
                            <td>19</td>
                        </tr>
                    </TableBody>
                </Table>
            </Typography>

            <Typography style={{ float: "right" }}>
                <Button>Approve</Button>
                <Button>Decline</Button>
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
                            <TableCell align="center">Check Item</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={e => {
                                    alert(row.name)
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.code}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.desc}</TableCell>
                                <TableCell align="center">{row.qnty}</TableCell>
                                <TableCell align="center">{row.unit}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography style={{ float: "right" }}>
                <Button>Approve</Button>
                <Button>Decline</Button>
            </Typography>
        </CardContent>

    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
