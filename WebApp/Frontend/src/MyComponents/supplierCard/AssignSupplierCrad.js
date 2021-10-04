
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {getSupplier} from  '../../action/supplierAction'
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard ({sup}) {
console.log(sup)
const dispatch =useDispatch();


useEffect(()=>{

    dispatch(getSupplier(sup));             

},[dispatch]);



const eventposts = useSelector((state)=>state.supplierReducer) 

console.log(eventposts.Name)
    
  return (
    
    <Card sx={{ minWidth: 275 }} style={{backgroundColor:'whitesmoke'}} >
      <CardContent>
        <Typography variant="h6" component="div">
        Name :{eventposts.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Location :{eventposts.Location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: {eventposts.Email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tel No: {eventposts.Phone}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>


    
  );
}