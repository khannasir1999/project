import "./Pages_Styles/FrontScreen.css";

import axios from "axios";
import React, { useState } from "react";
const FrontScreen = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputAge, setInputAge] = useState("");


  const handle_signup = async (e) => {
    e.preventDefault();
   
    const url = "https://localhost:44373/api/CrudOperation/CreateRecord";
    axios
      .post(url,{
        UserName: inputUserName,
        Age:inputAge
      })
      .then((result) => {
        alert(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        // alert(error);
        
      });
  };

  return (
    <div className="head">
      <div className="over-lay">
        <div className="nav-bar">
          <div className="heading">
            <h1 className="heading-text">My Health App</h1>
          </div>
        </div>
       
        <div className="Login">
          <form className="login__form">
            <input
              type="userName"
              name="userName"
              value={inputUserName}
              placeholder="Enter username"
              onChange={(e) => setInputUserName(e.target.value)}
            />
            <input
              type= "number"
              name="Age"
              value={inputAge}
              placeholder="Enter Age"
              onChange={(e) => setInputAge(e.target.value)}
            />
        
            <button
              type="submit"
              className="submit__btn"
              onClick={handle_signup}
            >
              {" "}
              Add User
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};
export default FrontScreen;
