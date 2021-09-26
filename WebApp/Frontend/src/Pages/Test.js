import React from "react";
import "../Style/Button.css"
import { Col, Row, Card, CardBody, CardTitle, Container, Button } from "reactstrap"
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";
function Test() {

    return (
        <React.Fragment>
            <Row>
                <Col sm={12} md={3}>
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
                </Col>
                <Col sm={12} md={3} >
                    <div class="btn-group2">
                        <Button>Export CSV</Button>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )

}

export default Test
