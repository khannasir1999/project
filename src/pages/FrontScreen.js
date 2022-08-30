import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
//import { login } from "../features/userSlice";
import "./Pages_Styles/FrontScreen.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { username, email, password, age } from "../Action";
import { axios } from "axios";
const FrontScreen = () => {
  // const [email , setEmail] = useState("");
  // const [password , setPassword] = useState("");

  const [inputUserName, setInputUserName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputError, setInputError] = useState("");
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    if (inputUserName) {
      setInputError("");
    }
  }, [inputUserName]);

  useEffect(() => {
    if (inputAge){
      setInputError("");
    }
  }, [inputAge]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const handleSubmit = (e) =>{
  //   e.preventDefault();

  //   // dispatch(
  //   //   login({
  //   //     email: email,
  //   //     password: password,
  //   //     islogged: true,

  //   //   }

  //     ),

  //   )
  //}
  // const login_btn = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "https://localhost:44373/api/CrudOperation/CreateRecord",
  //       {
  //         email: inputEmail,
  //         password: inputPassword,
  //       }
  //     );
  //     if (res.status === 200) {
  //       localStorage.setItem("email", res.data.user.email);

  //       localStorage.setItem("password", res.data.user.password);
  //       dispatch(age(res.data.user.age));
  //       dispatch(username(res.data.user.username));
  //       dispatch(email(res.data.user.email));
  //       dispatch(password(res.data.user.password));

  //       navigate("/Dashboard");
  //     }
  //   } catch (error) {
  //     setInputError("invalid credentials");
  //   }
  // };
  const handle_signup = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.Create(
        "https://localhost:44373/api/controller/CreateRecord",
        {
          UserName: inputUserName,
          Age: inputAge,
        }
      );

      if (res.status === 200) {
        console.log(res);
        localStorage.setItem("UserName", res.data.UserName);
        localStorage.setItem("Age", res.data.Age);

        window.alert("registered");
      }
    } catch (error) {
      console.log(error);
      setInputError("Some error occured");
    }
  };



     

  return (
    <div className="head">
      <div className="over-lay">
        <div className="nav-bar">
          <div className="heading">
            <h1 className="heading-text">My Health App</h1>
          </div>
        </div>
        {/* <div className="Login">
          <form className="Login__form" onSubmit={(e) => handleSubmit(e)}>
            <h1> Login Here</h1>

            <input
              type="email"
              name="email"
              value={inputEmail}
              placeholder="Enter email"
              onChange={(e) => setInputEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              value={inputPassword}
              placeholder="Enter password"
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <div style={{ color: "red", margin: "10px" }}>{inputError}</div>

            <button type="submit" className="submit__btn" onClick={login_btn}>
              {" "}
              Login{" "}
            </button>
           
              
          </form>
        </div> */}
        <div className="Login">
      
    <form className="login__form">
      <input type="userName"
      name="userName"
      value={inputUserName}
      placeholder = "Enter username"
      onChange={ (e) => setInputUserName(e.target.value)}
      />
      <input type="Age"
      name="Age"
      value={inputAge}
placeholder = "Enter Age"
onChange={ (e) => setInputAge(e.target.value)}
/>
<button type="submit" className="submit__btn" onClick={handle_signup}> Add User</button>
<div style={{ color: "red", margin: "10px" }}>{inputError}</div>
    </form>
    

      
        
  
   
    </div>
      </div>
    </div>
  );
};
export default FrontScreen;
