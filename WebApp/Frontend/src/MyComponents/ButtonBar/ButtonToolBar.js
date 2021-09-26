import React, { useState } from 'react'

import ButtonBar from './ButtonBar'

const ButtonToolBar = (props)=>{

    const btnList = [
        {
            btnText:"All",
            btnColor:"info",
            onClick:props.allClick
        },
        {
            btnText:"Pending",
            btnColor:"light",
            onClick:props.pendingClick
        },
        {
            btnText:"Approved",
            btnColor:"primary",
            onClick:props.approveClick
        },
        {
            btnText:"Denied",
            btnColor:"primary",
            onClick:props.deniedClick
        },
        {
            btnText:"Purchased",
            btnColor:"primary",
            onClick:props.purchaseclick
        },
        {
            btnText:"Recieved",
            btnColor:"primary",
            onClick:props.recevedClick
        }
    ];

    return(
        <div style={{paddingBottom:"10px"}}>
            <ButtonBar
            buttons = {btnList}
            btnWidth = {"sm"}
            menuStyle = {"btn-group"}
            />

        </div>
    )

}

export default ButtonToolBar