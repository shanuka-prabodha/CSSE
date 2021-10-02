import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid,TextField, Button} from '@material-ui/core';
import axios from 'axios';
import EventPosts from '../MyComponents/ordercrads/staffCards';

import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getOrder,getApprovel} from '../action/orderAction'
import { Col, Row, CardBody, CardTitle } from "reactstrap"
import CardContent from "@mui/material/CardContent";
import ButtonToolBar from "../MyComponents/ButtonBar/ButtonToolBar";
import { useHistory } from "react-router";

const ManageOders =() =>{

    const history = useHistory();
        const [currentId,setCurrentId] = useState(null);
        

        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{

            dispatch(getOrder());             

        },[currentId,dispatch]);

       

    return (

        <div style={{}} style={{}}>

<CardContent>
            <Row style={{ paddingLeft: "2%", paddingBottom: "10px", fontSize: "30px", fontWeight: "bold" }}>Purchase Order Requested</Row>
            <Row style={{ paddingLeft: "2%" }}>
                <ButtonToolBar
                    allClick={e => {
                        alert("All clicked")
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
                        alert("Pending clicked")
                    }}
                />
            </Row>
        </CardContent>
        
                    <Container>
                        
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}   >

                            <Grid item xs ={12} sm ={7}>
                                

                                <EventPosts setCurrentId ={setCurrentId}   />     
                            </Grid >

                        </Grid>
                    </Container>
           
           </div>
    );
}

export default ManageOders;