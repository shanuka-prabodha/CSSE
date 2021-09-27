import React from 'react';

import {Card,CardActions,CardContent,CardMedia,Button,TypographyTypeMap,Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import AddShoppingcartIcon from '@material-ui/icons/AddShoppingCart'
import {useDispatch}  from 'react-redux';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { blue } from '@mui/material/colors';


/*
product:"",
price:"",
category:"",
availableQty:"",
minimumQty:"",
mesuringUnit:"",
selectedfile:""*/


const OderCard = ({post,setCurrentId})=>{
    
    const EventDispatch = useDispatch();
    return(

        <div style={{margin:'0 15%'}} >
        <React.Fragment>
            <Card style={{ display: "flex", border: "1px solid ", margin: "10px", background: "#2F4050" }}>
                <div style={{ marginTop: "50px", marginLeft: "50px" }}>
                <Table>
                        <TableBody>
                            <TableRow  >
                                <TableCell  style={{color:"white" , borderBottom:"none"}}>Due Date</TableCell>
                                <TableCell style={{ padding: "0 15px" , color:"white" ,borderBottom:"none" }}>{post.DeliveryDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell  style={{color:"white" , borderBottom:"none"}}>Submitted Date</TableCell>
                                <TableCell style={{ padding: "0 15px" , color:"white" , borderBottom:"none" }}>{post.OrderDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell  style={{color:"white" , borderBottom:"none"}}>Description</TableCell>
                                <TableCell style={{ padding: "0 15px" ,color:"white" , borderBottom:"none" }}>These goods are high priority for Site A</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div style={{ margin: "5px", paddingLeft: "100px", marginTop:'50px'}}>
                <div>
                <div style={{  color:"white" }}><label> Priority</label></div>
                <div style={{  color:"white" }}><label> high</label></div>
               </div>
                    <div style={{ paddingTop: "15px" , color:"white" }}><label>Total Items  19</label></div>
                </div>

                <div style={{ marginLeft: "30%", marginTop: "40px" , color:"white" , paddingLeft:"px"}}>
                <Typography >
                <label>Requested by</label>
                <label>Dinisuru</label>
                </Typography>

                <div style={{marginTop:'10%'}}>
               
                
                    <Button style={{border:"1px solid blue" , marginLeft:"-15px" , padding:"5px",color:'blue' }}> Make Requistion</Button>
                
            
            </div>


                </div>
            </Card>
        </React.Fragment>
        </div>
    )
}

export default OderCard;