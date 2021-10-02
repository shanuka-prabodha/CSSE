
import React, {useEffect, useState} from "react";
import axios from "axios"


export default function GetEstimate(props) {


    const [cost, setCost] = useState(0);

    useEffect(() => {

        axios.get(`http://localhost:8020/reply/get-estimate/${props.orderId}`).then((res) => {
            console.log(res.data)

            res.data.map((sup) => {

                setCost(sup.EstimateCost)
            })

        })
            .catch(error => {
                alert(error)
            })
    }, [])


    return (
        <div>
            Rs. {cost} /=
        </div>
    )


}