import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" style={{backgroundImage: `url("images/bg1.jpg")`}}>
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2 style={{fontSize : "3rem"}}>About Me</h2>
               <p style={{color : "white", fontSize : "2rem"}}>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2 style={{fontSize : "3rem"}}>Contact Details</h2>
                  <p className="address" style={{color : "white", fontSize : "2rem"}}>
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}