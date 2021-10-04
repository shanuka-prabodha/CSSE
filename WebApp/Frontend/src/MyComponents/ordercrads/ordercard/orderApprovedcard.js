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

import { useHistory } from "react-router";

import {deleteorder} from '../../../action/orderAction'
 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DeleteIcon from '@material-ui/icons/Delete'



const OderApprovedCard = ({post,approve})=>{
    
    const EventDispatch = useDispatch();
    const history = useHistory();


    const navigateView=()=>{
        history.push("/StaffApprovedOderManage",{
            oderID :post._id
        })
    }

 console.log(approve)


 const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 //hidden ={approve == 'Approve' ? true :false}
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
                                <TableCell style={{ padding: "0 15px" ,color:"white" , borderBottom:"none" }}>{post.Description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div style={{ margin: "5px", paddingLeft: "100px", marginTop:'50px'}}>
                <div>
                <div style={{  color:"white" }}><label> Priority</label></div>
                <div style={{  color:"white" }}><label> {post.Priority}</label></div>
               </div>
                    <div style={{ paddingTop: "15px" , color:"white" }}><label> Items :{post.items.length}</label></div>
                </div>

                <div style={{ marginLeft: "30%", marginTop: "40px" , color:"white" , paddingLeft:"px"}}>
                <Typography >
                <label>Requested by  </label>
                <label>Dinisuru</label>
                </Typography>

                <div style={{marginTop:'10%'}}>
               
                <CardActions> 

                <Button style={{border:"1px solid blue" , marginLeft:"-15px" , padding:"5px",color:'white',background:"blue" }} onClick={()=>navigateView()} >view</Button>

                   
                        <div size ="small" onClick={handleClickOpen} style={{
                    color:'white',
                    background:'red',
                    position: 'absolute',
                    marginLeft:"100px",
                    height: '35px',
                    width: "35px",
                    cursor: "pointer",
                    borderRadius:"4px",
                    boxShadow:"0px 0px 6px rgba(0,0,0,0.5)",
                    backgroundColor: '#FA334E',
                    padding:"5px"
                }}  hidden ={approve == 'Approve' ? true :false}>
                <DeleteIcon fontSize = "default" style={{position:"absolute", top:"18%", left:"18%"}} />
                    
                {handleClickOpen}

                    
                </div>

                
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to delete this item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="h6">Due Date :{post.DeliveryDate}</Typography>
                <Typography variant="h6">Submitted Date:{post.OrderDate}</Typography>
                <Typography variant="h6">Description :{post.Description}</Typography>   
          <Typography variant="h6" color="textPrimary">Priority :{post.Priority}</Typography>
            <Typography variant="h6" color="textPrimary">Items :{post.items.length}</Typography>
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'white',background:'red'}} autoFocus>
            No
          </Button>
          <Button onClick={()=>EventDispatch(deleteorder(post._id),window.location.reload(false))} style={{color:'white',background:'blue'}} >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

                </CardActions>
            
            </div>


                </div>
            </Card>
        </React.Fragment>
        </div>
    )
}

export default OderApprovedCard;