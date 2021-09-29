import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Card1(props) {
    return (
        <React.Fragment>
            <Card style={{ display: "flex", border: "1px solid ", margin: "10px", background: "#2F4050" }}>
                <div style={{ marginTop: "50px", marginLeft: "50px" }}>
                    <div> <Button variant="contained">View</Button></div>
                    <div style={{ paddingTop: "15px", color: "white" }}><label>Total Items : 19</label></div>
                </div>
                <div style={{ margin: "5px", paddingLeft: "100px", flex: "3" }}>
                    <Table>
                        <TableBody>
                            <TableRow  >
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Due Date</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>23/08/2021</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Submitted Date</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>23/08/2021</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Description</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>These goods are high priority for Site A</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div style={{flex:"2"}}> 
                </div>
                <div style={{ marginTop: "60px", color: "white" , paddingRight:"10px" }}>
                    <label > Total Cost</label>
                    <label style={{ border: "1px solid blue", marginLeft: "10px", padding: "5px" }}> 150,000.00</label>

                </div>
            </Card>
        </React.Fragment>
    )

}

export default Card1
