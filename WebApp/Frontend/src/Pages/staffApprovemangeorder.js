import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Row, CardBody, CardTitle, Container } from "reactstrap"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonToolBar from "../MyComponents/ButtonBar/StaffButtonToolBar";

import React,{useState,useEffect} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import {getOrder,getOneOrder,updateStaffOrder} from '../action/orderAction'
import Select from 'react-select'
import axios from 'axios'

import { useLocation } from "react-router-dom";

import SupplierCard from '../MyComponents/supplierCard/AssignSupplierCrad'
import {Grid} from '@material-ui/core'
import { useHistory } from "react-router";

function createData(code, name, desc, qnty, unit, price) {
    return { code, name, desc, qnty, unit, price };
}





const rows = [
    createData('I001', 'Sand', 'Sand for laying foundation', '1 cubes', '10500/cube', 'checked'),
    createData('I251', 'Stone', 'Stones for laying foundation', '1 cubes', '10500/cube', 'checked'),
    createData('I121', 'Sand', '1/4 sheet for rofing', '1 cubes', '10500/cube', 'checked'),
    createData('I050', 'Cement', 'Cementfor laying foundationg', '1 cubes', '10500/cube', 'checked'),
    createData('I100', 'Sand', 'Iron rods 32/1', '1 cubes', '10500/cube', 'checked'),
];



const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);


export default function OutlinedCard() {

    const history = useHistory();

    const [currentId,setCurrentId] = useState(null);
    const [SelectedSupliers,setSelectedSupliers] = useState([])
    const [Supliers,setSupliers] = useState([])
    const [Options,setOptions] = useState([])
    const [selectedSupplier,setselectedSupllier] = useState([])

    const [cardsuppliers,setcardsuppliers ] = useState([])
        
     const onSupplierselect=(e)=>{
       // this.setState({selectedSubjects:e ? e.map(item=>item.value): []})
       setselectedSupllier(e ? e.map(item=>item.value): [])

       getsupplier(e ? e.map(item=>item.value): []);
    }

    function getsupplier(item){
        console.log(item)
        var supplier
        var New = []
        item.map((ssup,index)=>{ 
           
            supplier = Supliers.filter((sup) =>
                sup._id == ssup
                
                )
                New = New.concat(supplier)
console.log("fgggggggggggggggg")
                console.log(ssup);
                console.log(Supliers.filter((sup) =>
                sup._id == ssup
                
                ))
            
            
            })

            setcardsuppliers(New)
            console.log(New)

            
    }

     const location = useLocation();
     const orderID = location.state.oderID

     console.log(orderID)
 const dispatch =useDispatch();
const EventDispatch = useDispatch();


useEffect(()=>{

    dispatch(getOneOrder(orderID));


    axios.get('http://localhost:8020/supplier/readSupplier')
    .then(response =>{
        let data = [];
        /*setSupliers(response.data.data,()=>{
            let data = [];
            Supliers.map((supplier,index)=>{
                let Supplier ={
                    value:supplier._id,
                    label1 :supplier.Name,
                  
                }
                data.push(Supplier);
            })
            */
            setSupliers(response.data.data)
            response.data.data.map((supplier ,index)=>{
                data = data.concat({
                   label: supplier['Name'],
                      
                   value : supplier['_id']
                })
            })

            console.log(data);


            setOptions(data);
         
            
        })
  
   

},[]);


//console.log(selectedSupplier)
const eventposts = useSelector((state)=>state.orderReducer) 
console.log("hey")
    console.log(eventposts)
    console.log("hey")
//console.log(eventposts);

//console.log(Options)




    return (
        <Box sx={{ minWidth: 275 }}>
            (
    <React.Fragment>
        <CardContent>
            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase order for requistion</Row>
            <Row style={{ paddingLeft: "2%" }}>
            <ButtonToolBar
                   
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
                />
            </Row>
        </CardContent>
      
        <CardContent>
        { eventposts.map((post,index)=>{ 
                    return(
                        <div>
            <Typography variant="h5" component="div">
                PURCHASE ORDER PO-P0014
            </Typography>
            <Typography style={{ paddingLeft: "70%" }}>
                <label>Due Date :{post.DeliveryDate}</label>
              
            </Typography>
            <Typography style={{ paddingLeft: "70%" }}>
                <label>Submited date : {post.OrderDate}</label>
                
            </Typography>
            <Typography>
                Company Deatils
                </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Table sx={{ maxWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <tr>
                            <td>Company Name : </td>
                            <td>3ks Construction</td>
                        </tr>
                        <tr>
                            <td>Location :</td>
                            <td>Colombo</td>
                        </tr>
                    </TableBody>
                </Table>
            </Typography>
</div>)})}

<Grid container justify ="space-between" spacing ={3}>

    <Grid item xs ={12} sm ={7} style = {{width:"fit-content"}}>
    <Grid  container alignItems ="stretch" spacing={3} style={{height:'fit-content', width :'170%',marginTop:"10px"}}>
    { eventposts.map((post,index)=>{ 
                    return(
                        <div>

        {post.ChooseSuppliers.map((sup,ind) =>(

        
        <Grid key={ind} item xs={12} sm={4} >
        <SupplierCard sup = {sup}/>
        </Grid>
       

        ))}

    </div>)})}
</Grid>
</Grid>
</Grid>



           
            { eventposts.map((post,index)=>{ 
                    return(
                        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Code</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Unit Price</TableCell>
                            <TableCell align="center">Check Item</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                
                                { post.items.map((item,ind)=>(
                            <TableRow
                                key={ind}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={e => {
                                    alert(item.name)
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.itemName}
                                </TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.discription}</TableCell>
                                <TableCell align="center">{item.quantity}</TableCell>
                                <TableCell align="center">{item.unitPrice}</TableCell>
                                

                            </TableRow>
                        
                    ))}
                            
                   
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            )})}

           
        </CardContent>

    </React.Fragment>
        </Box>
    );
}
