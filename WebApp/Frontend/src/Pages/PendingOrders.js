import React, { useState } from "react";
import "../Style/Button.css"
import { Col, Row, Card, CardBody, CardTitle, Container, Button } from "reactstrap"
import Card1 from "../MyComponents/Card/Card1";
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";
import axios from "axios";


function PendingOrders() {

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
