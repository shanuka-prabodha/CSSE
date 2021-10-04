import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid,TextField, Button} from '@material-ui/core';
import axios from 'axios';
import EventPosts from '../MyComponents/ordercrads/staffCards';

import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getOrder,getApprovel} from '../action/orderAction'
import { Col, Row, CardBody, CardTitle } from "reactstrap"
import CardContent from "@mui/material/CardContent";
import ButtonToolBar from "../MyComponents/ButtonBar/StaffButtonToolBar";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

const ManageOders =() =>{

    const history = useHistory();

    const location = useLocation();
    const approve = location.state.approvel
    console.log(approve)
        const [currentId,setCurrentId] = useState(null);
        

        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{

            dispatch(getApprovel(approve));             

        },[currentId,dispatch]);

       

    return (

        <div className='heroSection'>
            <div className='container mt-lg-4' align="center">

<CardContent>
            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
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

                    lowcostClick={e => {
                        history.push("/staffApproved",{approvel :'else'})
                    }}

                    
                />
            </Row>
        </CardContent>
        
                    <Container>
                        
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}   >

                            <Grid item xs ={12} sm ={7}>
                                

                                <EventPosts approve ={approve}   />     
                            </Grid >

                        </Grid>
                    </Container>
           
           </div>
           </div>
    );
}

export default ManageOders;