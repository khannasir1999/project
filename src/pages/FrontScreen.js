
import React ,{ useState } from "react";
import "./Pages_Styles/FrontScreen.css";
const FrontScreen =  () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    return(
        <div className="head">
        
              <div className="over-lay">
      <div className="nav-bar">
        <div className="heading">
          <h1 className="heading-text">My health App</h1>
        </div>
        <div className="Login">
                <form className="Login__form">
                    <h1> Login Here</h1>
                 
                  
                    <input type= "email" value={email} placeholder="Enter email" onChange = {(e) =>setEmail(e.target.value)}/>
                  
                   
                  
                    <input type= "password" value={password} placeholder="Enter password" onChange = {(e) => setPassword(e.target.value)}/>
                 
                  
                    <button type="submit" className="submit__btn" > Login </button>
                </form>
            </div>
     
      </div>

</div>
</div>
    );
}
export default FrontScreen;