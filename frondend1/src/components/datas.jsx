import Goto from "./goto"
import React, { useEffect, useState } from "react";


function Datas(){
const [users,regUsers]= useState([
    {
        name:"",
        phoneNumber:"",
        email:"",
    },
  
]);
useEffect(()=>{
    fetch("http://localhost:3001/datas")
    .then((res=>res.json())
     
    )
    .then((jsonRes)=> regUsers(jsonRes));
    // console.log(users)
   
});

// console.log(users)

return(
  
    <div>
    <div>
    <Goto/>
    </div>
    
        <h1>Registered Users </h1>
        {users.map((user)=> (
             
             <div class="container">
             <hr/>
             
                <p>Name:{user.name}</p> 
                 <p>PhoneNumber:{user.phoneNumber}</p>
                 <p>Email:{user.email}</p>
                 
                <hr/>
             </div>  
           
                
                
             
        ))} 

        
        </div>
         
   
)

   
}
export default Datas;



   