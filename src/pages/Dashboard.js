import React from "react";
import "./Pages_Styles/Dashboard.css";
import { useDispatch } from "react-redux/es/exports";
import { logout } from "../features/userSlice";
import "../images/hello.jpg";
import "../images/red cross.png";
import {useNavigate} from "react-router-dom";
import "../images/circle.jpg"
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

import "../pages/Pages_Styles/Slider.css";
import ImageSlider from "../components/ImageSlide";
import { SliderData } from '../components/SliderData';



const Dashboard = () => {
    const pdata = [
        {
            name: 'Jan',
            upper_body_bp: 11,
            lower_body_bp: 15
        },
        {
            name: 'Feb',
            upper_body_bp: 15,
            lower_body_bp: 12
        },
        {
            name: 'Mar',
            upper_body_bp: 5,
            lower_body_bp: 10
        },
        {
            name: 'Apr',
            upper_body_bp: 10,
            lower_body_bp: 5
        },
        {
            name: 'May',
            upper_body_bp: 9,
            lower_body_bp: 4
        },
        {
            name: 'June',
            upper_body_bp: 10,
            lower_body_bp: 8
        },
        {
            name: 'Jul',
            upper_body_bp: 10,
            lower_body_bp: 8
        }, {
            name: 'Aug',
            upper_body_bp: 10,
            lower_body_bp: 8
        }, {
            name: 'Sept',
            upper_body_bp: 10,
            lower_body_bp: 8
        }, {
            name: 'Oct',
            upper_body_bp: 10,
            lower_body_bp: 8
        }, {
            name: 'Nov',
            upper_body_bp: 10,
            lower_body_bp: 8
        }, {
            name: 'Dec',
            upper_body_bp: 10,
            lower_body_bp: 8
        },
    ];
    const navigate = useNavigate();
const dispatch = useDispatch();
const handlelogout= (e)=>{
    e.preventDefault();
    dispatch (logout());
    navigate("/");

}
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



    return (
<>

<div className="container-fluid" style={{backgroundColor: "currentColor"}}>
<div className="row" >
    <div className="col-lg-12" /*style={{backgroundColor: "lightblue"}}*/>
    
    
   
        <div className="title_app">
        <img  src={require('../images/red cross.png')}  alt="logo" style={{width: "5vh" , height: "5vh"}}/>
       
            My Health App.
  


        </div>
    
            <button type="submit" className="logout__btn" onClick = {(e) => handlelogout(e)}> Logout </button>
    

    </div>

</div>
<div className="row" >
    <div className="col-lg-8" /*style={{backgroundColor: "lightgreen"}}*/>
        
        <div className="row">
            <div className="col-lg-12"/*style={{backgroundColor: "white"}}*/>
                <div className="users_info">
                Hi, Ann. 
                <button type="submit" className="Medication__btn">
                    Medication
                </button>
                <p className="Date_box">
                 {date}


                </p>
                
                <br/>
                check your 
                <br/>
                Activity.
                <img  src= {require('../images/hello.jpg')} alt="logo" style={{width: "5vh" , height: "5vh"}}/>
                </div>
                
            </div>
        </div>
        <div className="row">
       
            <div className="col-lg-6" /*style={{backgroundColor: "wheat"}}*/>
            
            <ResponsiveContainer style = {{width: "100%"}} >
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="upper_body_bp"
                        stroke="yellow" activeDot={{ r: 8 }} />
                    <Line dataKey="lower_body_bp"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            
            <div className="col-lg-6" /*style={{backgroundColor: "lightpink"}}*/>
                <img src = {require("../images/circle.jpg")} alt = "circle" style={{width: "30vh" , height: "25vh" ,  float: "left",
  
    clear:"both"}}/> 
               <p className="bp_card"> Blood pressure </p>
               <p className="bp_reading">120~     80~</p>
               

                                                              
               
            </div>

            </div>
            <div className="row">
                <div className="col-lg-12">
                <ImageSlider slides={SliderData}/>
                
                
             
                
</div>
             
              
            </div>

        </div>
    
    <div className="col lg-4" style={{backgroundColor: "#E7FE55" , borderRadius: 40 , padding: 20 , marginLeft: 43 , marginRight:180 , marginBottom:20}}>
        <img src="https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg" alt="user" className="profile__pic"/>
        <h4 className="username"> Mr/Ms. Ann </h4>
    </div>
</div>
</div>


</>

    );
}
export default Dashboard;