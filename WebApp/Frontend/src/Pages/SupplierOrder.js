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
import ViewOrder from "./Supplier/ViewOrder";
import Navbar from '../Pages/HomePage/NavBar/NavBar'


const _ = require('underscore-contrib');
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#1976D2',
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


export default function SupplierOrder() {

    const [userType, setUserType] = useState('');
    const [id, setId] = useState([]);


    const [orderList, setOrderList] = useState([]);
    const [itemList, setItemList] = useState([]);
    let [itemList2, setItemList2] = useState({});

    let items = []
    const userId = "61531ff1ebf085108c3b9e61";

    useEffect(() => {

        const getusertype = async () => {
            const access_token = localStorage.getItem('token')
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            }
            axios.get('http://localhost:8020/supplier/post', config).then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    // setUserType(response.data.user.usertype);
                    setId(response.data.user._id)
                    // alert(response.data.user._id)
                    getOrderList(response.data.user._id)
                }
            })
                .catch()
        };
        getusertype();


        function getOrderList(id) {


            // 61532085ebf085108c3b9e68
            //6153205febf085108c3b9e66

            axios.get(`http://localhost:8020/reply/get-orders/${id}`)
                .then((response) => {
                    setOrderList(response.data.data);
                    // console.log(response.data)

                })
                .catch((error) => {
                    alert(error)
                })

        }


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

    let count = 0;

    return (


        <div><Navbar/>
            <div className='heroSection'>


                <div className='container mt-lg-4 ' align="center">

                    SUPPLIER
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
                                    <StyledTableCell>View Order</StyledTableCell>
                                    <StyledTableCell>Send Estimation</StyledTableCell>
                                    <StyledTableCell>Order state</StyledTableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    orderList.map(orderList => (
                                        <TableRow key={orderList}>
                                            <TableCell>{orderList.ids}</TableCell>
                                            {/*<TableCell>Order {count=count+1}</TableCell>*/}
                                            <TableCell>{orderList.oDate}</TableCell>
                                            <TableCell>{orderList.dDate}</TableCell>

                                            {/*<TableCell>{items.quantity}</TableCell>*/}

                                            <TableCell>

                                                <ViewOrder
                                                    orderid={orderList.ids}
                                                    supplierid={id}

                                                /></TableCell>

                                            <TableCell>


                                                <SupplieReplyForm
                                                    orderid={orderList.ids}
                                                    supplierid={id}
                                                    assign={orderList.Assign}

                                                /></TableCell>


                                            <TableCell>
                                                <div hidden={orderList.Assign == 'false'}>
                                                    you were assigned You can Deliver Now
                                                </div>

                                                <div hidden={orderList.Assign == 'true'}>
                                                    you were not assigned yet
                                                </div>

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
        </div>
    )
}

