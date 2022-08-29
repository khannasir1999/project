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

  const [inputusername, setInputusername] = useState("");
  const [inputage, setInputage] = useState("");
  const [inputError, setInputError] = useState("");
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    if (inputusername) {
      setInputError("");
    }
  }, [inputusername]);

  useEffect(() => {
    if (inputage){
      setInputError("");
    }
  }, [inputage]);
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
  const handle_signup =async (e) => {
    try {
      const res = await axios.post("https://localhost:44373/api/CrudOperation/CreateRecord",
      {
        UserName: inputusername,
        Age: inputage,
      });
      if (res.status === 200) {
        localStorage.setItem("Username", res.data.user.username);
        

        localStorage.setItem("age", res.data.user.age);
        window.alert("registered");
      }
      
    } catch (error) {
      setInputError("Fields empty")
    }

  }

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
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  onChange={(e) => setInputusername(e.target.value) }/>
      </Form.Item>

      <Form.Item
        label="age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <Input.Password  onChange={(e) => setInputage(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
          <div style={{ color: "red", margin: "10px" }}>{inputError}</div>
        
         <button type="submit" className="signup__btn" onClick={handle_signup}> Signup </button>
      </Form.Item>
    </Form>
    </div>
      </div>
    </div>
  );
};
export default FrontScreen;
