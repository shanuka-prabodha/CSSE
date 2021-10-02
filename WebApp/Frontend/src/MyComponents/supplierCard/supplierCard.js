import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    
  return (
      <div style = {{marginLeft :"20px",marginTop:'10px' }}>
    <Card sx={{ minWidth: 275 }} style={{backgroundColor:'whitesmoke'}} >
      <CardContent>
        <Typography variant="h6" component="div">
        Name :{sup.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Location :{sup.Location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: {sup.Email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tel No: {sup.Phone}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
  );
}