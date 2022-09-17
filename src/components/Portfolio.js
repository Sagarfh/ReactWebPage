import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{backgroundImage: `url("images/bg1.jpg")`}}>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{color : "white",fontSize: "2rem" ,fontweight: "bold"}}>Check Out Some M.Tech Curriculum Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                        <div className="portfolio-item-meta" style={{backgroundColor: "	#5F9EA0"}}>
                        <div class="card" style={{width: "18rem", height: "10rem"}}>
                          <div class="card-body">
                            <p class="card-text">
                            <h5 style={{fontSize: "2rem", color: "black", textDecoration: "underline overline"}}>{item.name}</h5>
                            <br/>
                            <p style={{fontSize: "1.5rem", color: "white", fontWeight: "bold"}}>{item.description}</p>
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

        <div className="twelve columns collapsed">
          <h1 style={{color : "white",fontSize: "2rem" ,fontweight: "bold"}}>Check Out Some M.Tech Internship Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio1 && resumeData.portfolio1.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                      <div className="portfolio-item-meta" style={{backgroundColor: "	#5F9EA0"}}>
                        <div class="card" style={{width: "18rem", height: "10rem"}}>
                          <div class="card-body">
                            <p class="card-text">
                            <h5 style={{fontSize: "2rem", color: "black", textDecoration: "underline overline"}}>{item.name1}</h5>
                            <br/>
                            <p style={{fontSize: "1.5rem", color: "white", fontWeight: "bold"}}>{item.description1}</p>
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

        <div className="twelve columns collapsed">
          <h1 style={{color : "white",fontSize: "2rem" ,fontweight: "bold"}}>Check Out Some B.E Curriculum Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio2 && resumeData.portfolio2.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                      <div className="portfolio-item-meta" style={{backgroundColor: "	#5F9EA0"}}>
                        <div class="card" style={{width: "18rem", height: "10rem"}}>
                          <div class="card-body">
                            <p class="card-text">
                            <h5 style={{fontSize: "2rem", color: "black", textDecoration: "underline overline"}}>{item.name2}</h5>
                            <br/>
                            <p style={{fontSize: "1.5rem", color: "white", fontWeight: "bold"}}>{item.description2}</p>
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

        <div className="twelve columns collapsed">
          <h1 style={{color : "white",fontSize: "2rem" ,fontweight: "bold"}}>Check Out Some B.E Internship Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio3 && resumeData.portfolio3.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                      <div className="portfolio-item-meta" style={{backgroundColor: "	#5F9EA0"}}>
                        <div class="card" style={{width: "18rem", height: "10rem"}}>
                          <div class="card-body">
                            <p class="card-text">
                            <h5 style={{fontSize: "2rem", color: "black", textDecoration: "underline overline"}}>{item.name3}</h5>
                            <br/>
                            <p style={{fontSize: "1.5rem", color: "white", fontWeight: "bold"}}>{item.description3}</p>
                            </p>
                          </div>
                        </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>


      </div>
  </section>
        );
  }
}