import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription2}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills2 && resumeData.skills2.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname2.toLowerCase()}`}>
                      </span><em>{item.skillname2}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span></span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription1}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills1 && resumeData.skills1.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname1.toLowerCase()}`}>
                      </span><em>{item.skillname1}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span></span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription3}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills3 && resumeData.skills3.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname3.toLowerCase()}`}>
                      </span><em>{item.skillname3}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}