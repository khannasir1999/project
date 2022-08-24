import React from "react";
import "./Pages_Styles/Dashboard.css";
import { useDispatch } from "react-redux/es/exports";
import { logout } from "../features/userSlice";
import "../images/hello.jpg";
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

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

const Dashboard = () => {
const dispatch = useDispatch();
const handlelogout= (e)=>{
    e.preventDefault();
    dispatch (logout());

}
const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



    return (
<>

<div className="container-fluid" style={{backgroundColor: "yellow"}}>
<div className="row" >
    <div className="col-lg-12" style={{backgroundColor: "lightblue"}}>
    
    
   
        <div className="title_app">
        <img  src="https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg" alt="logo" style={{width: "5vh" , height: "5vh"}}/>
       
            My Health App.
  


        </div>
    
            <button type="submit" className="logout__btn" style = {{float: "right"}} onClick = {(e) => handlelogout(e)}> Logout </button>
    

    </div>

</div>
<div className="row" >
    <div className="col-lg-8" style={{backgroundColor: "lightgreen"}}>
        
        <div className="row">
            <div className="col-lg-12"style={{backgroundColor: "white"}}>
                <div className="users_info">
                Hi, Ann. 
                <button type="submit" className="Medication__btn">
                    Medication
                </button>
                <p className="Date_box">
                 {date}


                </p>
                
                <br/>
                check your activity.
                <img src= "hello.jpg" alt="hello" />
                </div>
                
            </div>
        </div>
        <div className="row">
       
            <div className="col-lg-6" style={{backgroundColor: "wheat"}}>
            
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="upper_body_bp"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="lower_body_bp"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            
            <div className="col-lg-6" style={{backgroundColor: "lightpink"}}>
               <p className="blood_pressure_card"> Blood pressure </p>
               <p className="blood_pressure_reading">120~     80~</p>
               

                                                              
               
            </div>

            </div>
            <div className="row">
                <div className="col-lg-1">
                    arrow left
                </div>
                <div className="col-lg-10" style={{backgroundColor: "grey"}}>
                    tips how to take medicine
                </div>
                <div className="col-lg-1">
                    right arrow
                </div>
            </div>

        </div>
    
    <div className="col lg-4" style={{backgroundColor: "black"}}>
        other section
    </div>
</div>
</div>


</>

    );
}
export default Dashboard;