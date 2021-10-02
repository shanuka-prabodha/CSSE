import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React, {useEffect, useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router-dom";
import axios from "axios";
import AssignSupplier from "./AssignSupplier";
import Button from "@material-ui/core/Button";
import SupplierName from "../Supplier/SupplierName";

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

export default function ViewMessages() {

    const location = useLocation();

    const orderId = location.state.orderId;


    const [replyList, setReplyList] = useState([]);
    let [count, setCount] = useState('');

let index=0;
    useEffect(() => {


        axios.get(`http://localhost:8020/reply/read-reply/${orderId}`)
            .then((res) => {
                console.log(res.data)
                setReplyList(res.data)

                if (res.data.length < 1)
                    setCount('No Supplier Assigned yet')


            })
            .catch(error => {
                alert(error)
            })
    }, [])


    function onSubmit(id, supId) {

        const OrderObject = {
            AssignSupplier: id,
            Assign: true
        }
        const SupplierObject = {
            Assign: true,
        }

        axios.put(`http://localhost:8020/order/assign/${orderId}`, OrderObject)
            .then((res) => {


                axios.put(`http://localhost:8020/reply/assign/${supId}`, SupplierObject)
                    .then((res) => {
                        alert("Assigned")
                        window.location.reload(true)
                    })

            })
            .catch(error => {
                alert(error)
            })

    }


    return (
        <div className='container mt-lg-4' align="center">

            {/*{count}*/}

            <TableContainer component={Paper}>
                <Table style={{backgroundColor: "#FFFFFF7C", color: "white"}}>

                    <TableHead>
                        <TableRow>
                            <StyledTableCell> ID</StyledTableCell>
                            {/*<StyledTableCell>supplier id</StyledTableCell>*/}
                            <StyledTableCell>Supplier Name</StyledTableCell>
                            {/*<StyledTableCell>Unit Cost</StyledTableCell>*/}
                            <StyledTableCell>Message</StyledTableCell>
                            <StyledTableCell>Total cost</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell hidden={count==''}>{count}</TableCell>
                            </TableRow>


                            {
                                replyList.map(replyList => (


                                    <TableRow>


                                        <TableCell>{replyList.orders}</TableCell>
                                        {/*<TableCell>{index=index+1}</TableCell>*/}

                                        {/*<TableCell>{replyList.suppliers}</TableCell>*/}

                                        <TableCell>
                                            <SupplierName
                                                id={replyList.suppliers}
                                            />
                                        </TableCell>


                                        <TableCell hidden={replyList.Message == 'empty'}>
                                        <textarea hidden={replyList.Message == 'empty'}
                                                  style={{width: '350px', height: '50px'}} value={replyList.Message}/>
                                            {/*<textarea hidden={replyList.Message!='empty'} style={{width: '350px', height: '50px'}} value={"No reply yet"}/>*/}
                                        </TableCell>

                                        <TableCell hidden={replyList.Message != 'empty'}>
                                            {"No reply yet"}
                                        </TableCell>


                                        {/*<TableCell hidden={replyList.Message=='empty'}  >*/}
                                        {/*    <textarea hidden={replyList.Message=='empty'}  style={{width: '350px', height: '50px'}} value={ replyList.Message}/>*/}
                                        {/*</TableCell>*/}


                                        <TableCell
                                            hidden={replyList.Message == 'empty'}>Rs. {replyList.EstimateCost}</TableCell>
                                        <TableCell hidden={replyList.Message != 'empty'}></TableCell>
                                        {/*<TableCell hidden={replyList.EstimateCost != null}>Rs. {replyList.EstimateCost}</TableCell>*/}


                                        {/*<TableCell>{itemList.unitPrice}</TableCell>*/}
                                        <TableCell>
                                            <Button variant="outlined" color="secondary"
                                                    disabled={replyList.Assign == 'true' || replyList.Message == 'empty'}
                                                    onClick={() => onSubmit(replyList.suppliers, replyList._id)}>Assign
                                                Order</Button>
                                            {/*<AssignSupplier*/}

                                            {/*    orderId={replyList.orders}*/}
                                            {/*/>*/}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }


                    </TableBody>
                </Table>
            </TableContainer>
        </div>
)
}


