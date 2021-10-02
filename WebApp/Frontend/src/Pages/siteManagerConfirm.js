import React, { useState } from "react";
import "../Style/Button.css"
import { Col, Row, Card, CardBody, CardTitle, Container, Button } from "reactstrap"
import Card1 from "../MyComponents/Card/Card1";
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";
import axios from "axios";
import Card2 from "./../MyComponents/Card/Card2"
import {useHistory} from "react-router";

export default function SiteConfirm(){

    const history = useHistory();
    const [orders , SetOrders] = useState([])
    const [sorting , SetSorting] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8020/order/readOder',).then((response) => {
                var items 
                var newarray = []
                newarray = newarray.concat(response.data.filter(item=>{if(item.AdminApproval == "Approve" && item.Assign == "true"){
                    return item
                }}))

            SetOrders(newarray)
            SetSorting(newarray)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return(
        <React.Fragment>
              <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Accepted Orders</Row>
            <Row style={{ paddingLeft: "2%" }}>
            </Row>
            {orders.map((e) => (
                <Card2 
                itemscount={e["items"].length}
                duedate={e["DeliveryDate"]}
                subdate={e["OrderDate"]}
                desc={e["Description"]}
                items={e["items"]}
                status={e["State"]}
                id={e["_id"]}

                />
            ))}
        </React.Fragment>
    )
}