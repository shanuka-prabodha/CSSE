import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useHistory } from "react-router-dom";


function Card1(props) {
    let history = useHistory();

    function View() {
        history.push("/approval/oneOrder", {
            desc: props.desc,
            dueDate: props.duedate,
            subDate: props.subdate,
            items: props.items,
            status: props.status,
            id: props.id
        });
    }

    const [total, SetTotal] = useState("")

    React.useEffect(() => {
        var tota = 0
        props.items.map((obj, index) => {
            tota = tota + (obj["quantity"] * obj["unitPrice"])
        })

        SetTotal(tota)

    }, [])

    return (
        <React.Fragment>
            <Card style={{ display: "flex", border: "1px solid ", margin: "10px", background: "#2F4050" }}>
                <div style={{ marginTop: "50px", marginLeft: "50px" }}>
                    <div> <Button variant="contained" onClick={e => {
                        View()
                    }}>View</Button></div>
                    <div style={{ paddingTop: "15px", color: "white" }}><label>Total Items : {props.itemscount}</label></div>
                </div>
                <div style={{ margin: "5px", paddingLeft: "100px", flex: "3" }}>
                    <Table>
                        <TableBody>
                            <TableRow  >
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Due Date</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>{props.duedate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Submitted Date</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>{props.subdate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ color: "white", borderBottom: "none" }}>Description</TableCell>
                                <TableCell style={{ padding: "0 5px", color: "white", borderBottom: "none" }}>{props.desc}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div style={{ flex: "2" }}>
                </div>
                <div style={{ marginTop: "60px", color: "white", paddingRight: "10px" }}>
                    <label > Total Cost</label>
                    <label style={{ border: "1px solid blue", marginLeft: "10px", padding: "5px" }}>Rs. {parseFloat(total)} </label>

                </div>
            </Card>
        </React.Fragment>
    )

}

export default Card1
