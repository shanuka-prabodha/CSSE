import React from 'react';
import { Button } from 'reactstrap';

const ButtonBar=(props)=>{
    const btns = props.buttons
    const menuStyle = props.menuStyle
    const toolBarButtons = "round"

    let buttonDesign =(toolBarButtons == "round" ? "btn-rounded  " : "") + 'w-' +props.btnWidth +(props.btnSize != null ? ' btn-' + props.btnSize : '' )+ ' ';
    let menuClass = menuStyle != null ? "btn-group" : "button-items";

    return(
        <React.Fragment>
            <div className={menuClass}>
                {btns.map((btn)=>(
                    <Button style={{background:"#2F4050", margin: "0%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" , color:"white" , width:"auto" , height:"auto" , fontSize:"25px"}}
                    onClick={btn.onClick}
                    color="success"
                    >                    
                    {btn.btnText}
                    </Button>
                ))}

            </div>
        </React.Fragment>
    )
}
export default ButtonBar