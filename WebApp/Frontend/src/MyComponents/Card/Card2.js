import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useHistory } from "react-router-dom";


function Card2(props) {
    let history = useHistory();

    function View() {
        history.push("/approval/siteOrder", {
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
            <Card style={{ display: "flex", border: "1px solid ", margin: "10px", background: "#2F4050", height: "100px" }}>
                <div style={{ marginTop: "30px" , color:"white" , marginLeft:"50px"}}>
                    <label>Description : </label>
                    <label style={{marginLeft:"10px"}}>{props.desc}</label>
                </div>
                <div style={{ flex: "11" }}>
                </div>
                <div style={{ marginTop: "30px", float: "right" , marginRight:"100px" }}>
                    <div> <Button variant="contained" onClick={e => {
                        View()
                    }}>View</Button></div>

                </div>
            
            </Card>
        </React.Fragment>
    )

}

export default Card2
