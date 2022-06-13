
import React, { useState } from "react";
import axios from "axios";



function Register() {
    const [nameReg, setNameReg] = useState('')
    const [phoneNumberReg, setPhoneNumberReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [signupStatus, setSignupStatus] = useState('')

    const HandleClick = () => {


        const newNote = {
            name: nameReg,
            phoneNumber: phoneNumberReg,
            email: emailReg,
            password: passwordReg
        };
       
        if (newNote.name.length<1) {
                alert("pls complete")
         
        }else{
            if(newNote.phoneNumber.length===10){
            axios.post("http://localhost:3001/signup", newNote)
            .then((response) => {
            console.log(response);
            setSignupStatus(response.data.message);
    
        })
    
        }else{
            alert('enter valid number');return false;
        }
    }
        
    
        
        
    }

   














    return (

        <div>
            <div class="consultationSection">
                <h5>CREATE YOUR<br />Account </h5>

                <div class="row">
                    <div class="col-md-4 form">

                        <form >
                            <label class="textbox" for="name">Name<br />
                                <input class="textbox" type="text"
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                    name="name"

                                    onChange={(e) => {
                                        setNameReg(e.target.value);
                                    }}
                                />
                            </label>
                           

                            <label class="textbox" for="number">Phone Number<br />
                                <input class="textbox" type="text"
                                    placeholder="Enter Your Phone Number"
                                    autoComplete="off"
                                    name="phoneNumber"

                                    onChange={(e) => {
                                        setPhoneNumberReg(e.target.value);
                                    }}
                                />
                            </label>
                            <label class="textbox" for="email">Email<br />
                                <input class="textbox" type="email"
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                    name="email"
                                    onChange={(e) => {
                                        setEmailReg(e.target.value);
                                    }}
                                />
                            </label>
                            <label class="textbox" for="password">Password<br />
                                <input class="textbox" type="password"
                                    placeholder="Create Your Password"
                                    autoComplete="off"
                                    name="password"
                                    onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }}

                                />

                            </label>


                            <button onClick={HandleClick} type="submit" class="sendbutton "  >
                                Register
                            </button>
                        </form>

                    </div>
                    <div class="formImg col-md-4">
                        <img src="images/form-img.png" alt="form-img" />
                    </div>

                </div>

            </div>
        </div>

    )
};
export default Register;