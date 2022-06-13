import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import App from "./components/App";
import Sign from "./components/sign";
import Login from "./components/login"
import Datas from "./components/datas";

 function RouterPage(){
    return(
        
            <Router>
                <Routes>
               
                <Route exact path="/"  element={<App/>}></Route>
                    <Route path="/sign" element={<Sign/>} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/datas" element={<Datas/>}/>
                </Routes>
            </Router>
            
       
    );
};
export default RouterPage;