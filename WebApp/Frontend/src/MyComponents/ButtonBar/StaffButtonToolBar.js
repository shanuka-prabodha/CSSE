import React, { useState } from 'react'

import ButtonBar from './ButtonBar'

const StaffButtonBar = (props)=>{

    const btnList = [
      

        {
            btnText:"New",
            btnColor:"info",
            onClick:props.newClick
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
            btnText:"Received",
            btnColor:"primary",
            onClick:props.recevedClick
        },
        {
            btnText:"Message",
            btnColor:"primary",
            onClick:props.messageClick
        },

        {
            btnText:"Low cost orders",
            btnColor:"primary",
            onClick:props.lowcostClick
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

export default StaffButtonBar