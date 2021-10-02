import React, {useState, Component } from "react";
import { toast } from 'react-toastify'
import { Input, Button, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios"

toast.configure()

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    function login(e) {
        e.preventDefault();

        const oldUser = {
            email,
            password
        }

        if (email == "") {
          //  toast.error("Email is empty", { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
          alert("email empty")
        } else if (password == "") {
           // toast.error("Password is empty", { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
           alert("Pasword empty")
        } else {
            axios.post("http://localhost:8020/supplier/login", oldUser).then((response) => {
                if (response.data.message) {
                    //toast.error(response.data.message, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
                    alert(response.data.message)
                } else {
                    //toast.success('Login Success!', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
                    localStorage.setItem("token", response.data.token)

                        window.location.assign("/approval");
                   
                }
            }).catch((err) => {
                alert(err)
            })

        }

    }

    function register(){
        window.location.assign("/register")
    }


    return (
        <div style={{ width: "max", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ margin: "150px", background: "yellow" }}>
                <form className="form">
                    <div style={{ marginBottom: "20px", font: "caption", fontWeight: "bold", marginTop: "20px", paddingLeft: "20px" }}>
                        <Label>
                            Login Form
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
                    <div style={{ margin: "10px" }}>
                    </div>
                    <div style={{ margin: "10px", float: "right" }} >
                        <Button type="button" color="primary" className="form__custom-button" style={{ marginRight: "10px" }} onClick={register}>
                            Register
                        </Button>
                        <Button type="button" color="primary" className="form__custom-button" onClick={login}>
                            Log in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );

}
