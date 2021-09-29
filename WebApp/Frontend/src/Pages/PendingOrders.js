import React from "react";
import "../Style/Button.css"
import { Col, Row, Card, CardBody, CardTitle, Container, Button } from "reactstrap"
import Card1 from "../MyComponents/Card/Card1";
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";

function PendingOrders() {

    const array = [1, 2, 3, 4, 5]

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

            {array.map((e) => (
                <Card1 />
            ))}
        </React.Fragment>
    )
}

export default PendingOrders
