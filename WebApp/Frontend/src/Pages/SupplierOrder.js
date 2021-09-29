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
import SupplieReplyForm from "./SupplieReplyForm";

const _ = require('underscore-contrib');
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5E4FA2',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,

    },
}))(TableCell);
export default function SupplierOrder() {

    const [orderList, setOrderList] = useState([]);
    const [itemList, setItemList] = useState([]);
    let [itemList2, setItemList2] = useState({});

    let items = []
    const userId= "61532085ebf085108c3b9e68";

    useEffect(() => {

        function getOrderList() {



            // 61532085ebf085108c3b9e68
            //6153205febf085108c3b9e66

            axios.get(`http://localhost:8020/reply/get-orders/${userId}`)
                .then((response) => {
                    setOrderList(response.data.data);
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

    return (
        <div>

            SUPPLIER
            {/*<button onClick={printorder}>Click here</button>*/}

            {/*{*/}
            {/*    orderList.map((value) => (*/}


            <TableContainer component={Paper}>


                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Order Date</StyledTableCell>
                            <StyledTableCell>Due Date</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderList.map(orderList => (
                                <TableRow key={orderList}>
                                    {/*<TableCell>{orderList.ids}</TableCell>*/}
                                    <TableCell>Order {count=count+1}</TableCell>
                                    <TableCell>{orderList.oDate}</TableCell>
                                    <TableCell>{orderList.dDate}</TableCell>
                                    {/*<TableCell>{items.quantity}</TableCell>*/}
                                    <TableCell>

                                        <SupplieReplyForm
                                            orderid = {orderList.ids}
                                            supplierid={userId}

                                    /></TableCell>


                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>

            {/*    ))*/}
            {/*}*/}


        </div>
    )
}

