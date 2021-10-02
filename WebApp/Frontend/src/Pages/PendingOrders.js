import React, { useState } from "react";
import "../Style/Button.css"
import { Col, Row, Card, CardBody, CardTitle, Container, Button } from "reactstrap"
import Card1 from "../MyComponents/Card/Card1";
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";
import axios from "axios";
import {useHistory} from "react-router";


function PendingOrders() {
    const history = useHistory();
    const [orders , SetOrders] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8020/order/readOder',).then((response) => {
            SetOrders(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])



    return (
        <React.Fragment>
            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
            <Row style={{ paddingLeft: "2%" }}>
                <ButtonToolBar
                    allClick={e => {
                        alert("All clicked")
                    }}
                    recevedClick={e => {
                        history.push("/received")

                    }}
                    purchaseclick={e => {
                        history.push("/payed")
                    }}
                    deniedClick={e => {
                        alert("Denied clicked")
                    }}
                    approveClick={e => {
                        alert("Approve clicked")
                        history.push("/supplier")
                    }}
                    pendingClick={e => {
                        alert("Pending clicked")
                    }}
                />
            </Row>

            {orders.map((e) => (
                <Card1 
                itemscount={e["items"].length}
                duedate={e["DeliveryDate"]}
                subdate={e["OrderDate"]}
                desc={e["Description"]}
                items={e["items"]}
                status={e["AdminApproval"]}
                id={e["_id"]}
                />
            ))}
        </React.Fragment>
    )
}

export default PendingOrders
