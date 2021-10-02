import React, {useState, Component } from "react";
import { toast } from 'react-toastify'
import { Input, Button, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios"

toast.configure()

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const history = useHistory()
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function register(e) {
        e.preventDefault();

        const newUser = {
            email,
            password,
        }
        
        if(email == ""){
           // toast.warn('Email is empty',{position: toast.POSITION.TOP_CENTER , autoClose:2000})
           alert("email empty")
        }else if(!pattern.test(email)){
                alert("Email not valid")
        }else if(password == ""){
            //toast.warn('Password is empty',{position: toast.POSITION.TOP_CENTER , autoClose:2000})
            alert("password empty")
        }else if(confirm == ""){
            //toast.warn('Confirm password is empty',{position: toast.POSITION.TOP_CENTER , autoClose:2000})
            alert("confirm password empty")
        }else if(password != confirm){
            //toast.warn('Password dosent match',{position: toast.POSITION.TOP_CENTER , autoClose:2000})
            alert("password not equal")
        }else {
            axios.post("http://localhost:8020/user/register", newUser).then((response) => {
                if (response.data.Error) {
                    toast.error(response.data.Error,{position: toast.POSITION.TOP_CENTER , autoClose:2000})
                    document.getElementById("myForm").reset();
                }else{
                    toast.success(response.data.message,{position: toast.POSITION.TOP_CENTER , autoClose:2000})
                    window.location.assign("/login")
                }
            }).catch((err) => {
                //toast.error(err.message,{position: toast.POSITION.TOP_CENTER , autoClose:2000})
                alert(err)
            })
        }
    }



    return (
        <div style={{ width: "max", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ margin: "150px", background: "yellow" }}>
                <form className="form">
                    <div style={{ marginBottom: "20px", font: "caption", fontWeight: "bold", marginTop: "20px", paddingLeft: "20px" }}>
                        <Label>
                            Register Form
                        </Label>
                    </div>

                    <div style={{ margin: "10px", width: "400px" }}>
                        <Input
                            labelText="Email"
                            id="email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={e=>{
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div style={{ margin: "10px", width: "400px" }} >
                        <Input
                            labelText="Password"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e=>{
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div style={{ margin: "10px", width: "400px" }} >
                        <Input
                            labelText="Password"
                            id="conpassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirm}
                            onChange={e=>{
                                setConfirm(e.target.value)
                            }}
                        />

                    </div>
                    <div style={{ margin: "10px" }}>
                    </div>
                    <div style={{ margin: "10px", float: "right" }} >
                        <Button type="button" color="primary" className="form__custom-button" style={{ marginRight: "10px" }} onClick={register}>
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );

}
