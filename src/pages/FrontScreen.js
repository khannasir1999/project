
import React ,{ useState } from "react";
import { login } from "../features/userSlice";
import "./Pages_Styles/FrontScreen.css";
import { useDispatch } from "react-redux";
const FrontScreen =  () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
      e.preventDefault();

      dispatch(
        login({
          email: email,
          password: password,
          islogged: true,

        
        }


        )
      )

    }
    return(
        <div className="head">
        
              <div className="over-lay">
      <div className="nav-bar">
        <div className="heading">
          <h1 className="heading-text">My Health App</h1>
        </div>
        
     
      </div>
      <div className="Login">
                <form className="Login__form" onSubmit={(e) => handleSubmit(e)}>
                    <h1> Login Here</h1>
                 
                  
                    <input type= "email" value={email} placeholder="Enter email" onChange = {(e) =>setEmail(e.target.value)}/>
                  
                   
                  
                    <input type= "password" value={password} placeholder="Enter password" onChange = {(e) => setPassword(e.target.value)}/>
                 
                  
                    <button type="submit" className="submit__btn" > Login </button>
                    <button type="submit" className="signup__btn"> SignUp </button>
                </form>
            </div>

</div>
</div>
    );
}
export default FrontScreen;