import React, {useState, useEffect} from "react";
import axios from "axios";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ViewOrder from "../Supplier/ViewOrder";

import {Row} from "reactstrap";
import ButtonToolBar from "../../MyComponents/ButtonBar/ButtonToolBar";
import {useHistory} from "react-router";
import Gateway from "../Payment/Gateway";
import GetEstimate from "../Admin/GetEstimate";
import StaffButtonToolBar from "../../MyComponents/ButtonBar/StaffButtonToolBar";


const _ = require('underscore-contrib');
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
        color: '#ffffff',
    },
});



export default function StaffReceived() {

    const [orderList, setOrderList] = useState([]);
    const [itemList, setItemList] = useState([]);
    let [itemList2, setItemList2] = useState({});

    let items = []
    const userId= "61531ff1ebf085108c3b9e61";

    useEffect(() => {

        function getOrderList() {



            // 61532085ebf085108c3b9e68
            //6153205febf085108c3b9e66

            axios.get(`http://localhost:8020/order/readOder`)
                .then((response) => {
                    setOrderList(response.data);
                    // console.log(response.data)

                })
                .catch((error) => {
                    alert(error)
                })

        }

        getOrderList()
        // printorder()

    }, [])


    // function  printorder() {
    //
    //     orderList.map((value) => {
    //         // console.log(value)
    //         axios.get(`http://localhost:8020/order/find/${value}`)
    //             .then((response) => {
    //                 setItemList(response.data);
    //                 // setItemList(oldArray => [...oldArray, response.data]);
    //                 items.push(response.data)
    //                 console.log(setItemList)
    //
    //             })
    //             .catch((error) => {
    //                 alert(error)
    //             })
    //     })
    //
    //
    //     // setItemList2 = {...itemList, itemList}
    //     // items = itemList
    //     //
    //     console.log(items)
    //     // console.log(itemList)
    // }

    let count=0;
    const history = useHistory();
    return (

        <div className='heroSection'>

        <div className='container mt-lg-4' align="center">

            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
            <Row style={{ paddingLeft: "2%" }}>
                <StaffButtonToolBar
                  allClick={e => {
                   
                }}

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








            Received Orders
            {/*<button onClick={printorder}>Click here</button>*/}

            {/*{*/}
            {/*    orderList.map((value) => (*/}


            <TableContainer component={Paper}>


                <Table style={{backgroundColor: "#FFFFFF7C", color: "white"}}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Order Date</StyledTableCell>
                            <StyledTableCell>Due Date</StyledTableCell>
                            <StyledTableCell>Priority</StyledTableCell>
                            <StyledTableCell>View Order</StyledTableCell>
                            <StyledTableCell>Order state</StyledTableCell>
                            <StyledTableCell>payable Cost</StyledTableCell>
                            <StyledTableCell>Payment</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderList.filter((orderList)=>{

                                if(orderList.State=='Received'){
                                    return orderList
                                }

                            }).map(orderList => (
                                <TableRow key={orderList}>

                                    <TableCell>Order {count=count+1}</TableCell>
                                    {/*<TableCell>{orderList._id}</TableCell>*/}
                                    {/*<TableCell>ORDER  {index=index+1}</TableCell>*/}

                                    <TableCell>{orderList.DeliveryDate}</TableCell>
                                    <TableCell>{orderList.OrderDate}</TableCell>
                                    <TableCell>{orderList.Priority}</TableCell>

                                    {/*<TableCell>{items.quantity}</TableCell>*/}

                                    <TableCell >

                                        <ViewOrder
                                            orderid = {orderList._id}


                                        /></TableCell>






                                    <TableCell>
                                        {orderList.State}
                                    </TableCell>

                                    <TableCell>

                                        <GetEstimate

                                            orderId={orderList._id}
                                        />
                                    </TableCell>


                                    <TableCell>

                                        <Gateway

                                            orderId={orderList._id}
                                        />
                                    </TableCell>



                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>

            {/*    ))*/}
            {/*}*/}


        </div>
        </div>
    )
}

