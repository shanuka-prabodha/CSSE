import React, {useEffect, useState} from "react";
import axios from "axios"


export default function SupplierName(props) {


    const [name, setName] = useState('');

    useEffect(() => {

        axios.get(`http://localhost:8020/supplier/find/${props.id}`).then((res) => {
            console.log(res.data)

            res.data.map((sup) => {

                setName(sup.Name)
            })

        })
            .catch(error => {
                alert(error)
            })
    }, [])


    return (
        <div>
            {name}
        </div>
    )


}