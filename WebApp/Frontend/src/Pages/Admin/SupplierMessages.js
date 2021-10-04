import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React, {useEffect, useState} from "react";
import {withStyles,makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Row} from "reactstrap";
import ButtonToolBar from "../../MyComponents/ButtonBar/ButtonToolBar";
import StaffButtonToolBar from "../../MyComponents/ButtonBar/StaffButtonToolBar";
import ViewMessage from "./ViewMessage";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#FA334E',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,
    },
}))(TableCell);




const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor: 'darkgray',
        color:'#ffffff',
    },
});






export default function SupplierMessages() {

    const [orderList, setOrderList] = useState([]);


    useEffect(() => {


        axios.get(`http://localhost:8020/order/readOder`)
            .then((res) => {
                console.log(res.data)
                setOrderList(res.data)

            })
            .catch(error => {
                alert(error)
            })
    }, [])


    const history = useHistory()

    function navigateView(id) {
        history.push('/view', {
            orderId: id
        })
    }

    let index=0;
    return (

        <div className='heroSection'>
        <div className='container mt-lg-4' align="center">

            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
            <Row style={{ paddingLeft: "2%" }}>
                <StaffButtonToolBar
                    

                    newClick={e => {
                        history.push("/manageOrder",{approvel :'New'})
                    }}

                    
                    recevedClick={e => {
                        alert("Recevied clicked")
                    }}
                    purchaseclick={e => {
                        alert("Purchase clicked")
                    }}
                    deniedClick={e => {
                        history.push("/staffApproved",{approvel :'Decline'})
                    }}
                    approveClick={e => {

                        history.push("/staffApproved",{approvel :'Approve'})

                    }}
                    pendingClick={e => {
                        history.push("/staffApproved",{approvel :'Pending'})
                    }}

                    messageClick={e => {
                        history.push("/message")
                    }}

                    recevedClick={e => {
                        history.push("/st-received")

                    }}
                    purchaseclick={e => {
                        history.push("/st-payed")
                    }}

                    lowcostClick={e => {
                        history.push("/staffApproved",{approvel :'else'})
                    }}
                />
            </Row>



            <TableContainer component={Paper}>
                <Table  style={{ backgroundColor: "#FFFFFF7C",color: "white" }}>
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>Order ID</StyledTableCell>
                            <StyledTableCell>Order date</StyledTableCell>
                            <StyledTableCell>Delivery date</StyledTableCell>
                            <StyledTableCell>Priority</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                            {/*<StyledTableCell>Unit Cost</StyledTableCell>*/}

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            orderList.map(orderList => (
                                <TableRow>
                                    {/*<TableCell>{orderList._id}</TableCell>*/}
                                    <TableCell>ORDER  {index=index+1}</TableCell>

                                    <TableCell>{orderList.DeliveryDate}</TableCell>
                                    <TableCell>{orderList.OrderDate}</TableCell>
                                    <TableCell>{orderList.Priority}</TableCell>
                                    {/*<TableCell>{orderList._id}</TableCell>*/}
                                    <TableCell>
                                        <Button variant="contained" color="secondary" onClick={() => navigateView(orderList._id)}>View Replies</Button>

                                    </TableCell>
                                    {/*<TableCell>*/}
                                    {/*    <ViewMessage*/}
                                    {/*    orderId={orderList._id}*/}
                                    {/*    />*/}
                                    {/*</TableCell>*/}

                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
    )
}


