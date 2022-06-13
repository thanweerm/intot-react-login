import { useNavigate } from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";
import Goto from "./goto";
// import { response } from "express";


function Login() {
    const [name,setName] =useState('');
    
    const [password,setPassword] =useState('');
    const [loginStatus,setLoginStatus]=useState('');

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/datas'; 
    navigate(path);
  }
    const login =()=>{
        axios.post("http://localhost:3001/log",{
            name:name,
            password:password
        }).then((response)=>{
            console.log(response);
            if (response.data.message){
                setLoginStatus(response.data.message);
                alert("wrong username/password")
                

            }else{
                setLoginStatus("welcomeback " + response.data[0].username);
                routeChange()
                
 
            }
        })
    }   
    
        
    
    return (
       
        <div className="login">
             <Goto/>
            <div className="logincontainer">
                <label>UserName<br />

                    <input class="textbox" type="text"
                        placeholder="Enter Your UserName"
                        autoComplete="off"
                        name="userName"
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}

                    />


                </label>
                <label>Password<br />

                    <input class="textbox" type="password"
                        placeholder="Enter Your Password"
                        autoComplete="off"
                        name="password"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}

                    />


                </label>
                
                <button className="btn   loginbtn" onClick={login}> Login </button>
              
                
            </div>

        </div>
    )
}
export default Login;