import React from "react";
import "./Pages_Styles/Dashboard.css";
const Dashboard = () => {
    return (
<>
<div className="container-fluid">
<div className="row">
    <div className="col-lg-12">
        navbar
    </div>

</div>
<div className="row">
    <div className="col-lg-8" style={{backgroundColor:"lightblue"}}>
        
        <div className="row">
            <div className="col-lg-12">
                hi ann check
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                65mh graph
            </div>
            <div className="col-lg-6">
                blood pressure
            </div>

            </div>
            <div className="row">
                <div className="col-lg-1">
                    arrow left
                </div>
                <div className="col-lg-10">
                    tips how to take medicine
                </div>
                <div className="col-lg-1">
                    right arrow
                </div>
            </div>

        </div>
    
    <div className="col lg-4">
        other section
    </div>
</div>
</div>

</>

    );
}
export default Dashboard;