import React from 'react';
import Posts from './ordercard/staffcard'
import{useSelector} from 'react-redux'
import {Grid,CircularProgress} from '@material-ui/core'

import Styles from './styles'


const OderPosts = ({setCurrentId})=>{  
    const eventposts = useSelector((state)=>state.orderReducer) 
    const classes = Styles();
    console.log(eventposts);


    return(
        
        !eventposts.length ? <CircularProgress /> : (

            

            <div className={classes.container} container alignItems ="stretch" spacing={3} style={{height:'700px', width :'150%',marginTop:"10px",marginLeft:'-280px'}}>
                {
                    eventposts.map((post)=>(
                        <div key={post._id} item xs={12} sm={4}  style={{width :'150%'}}>

                            <Posts  post={post} setCurrentId={setCurrentId} />
                        
                        </div>

                    ))}

            </div>
        )

        
    )
    
}

export default OderPosts;