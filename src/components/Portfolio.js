import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{backgroundImage: `url("images/bg1.jpg")`}}>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{color : "white"}}>Check Out Some M.Tech Curriculum Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                        <div className="portfolio-item-meta">
                        <div class="card" style={{width: "18rem", height: "10rem"}}>
                          <div class="card-body">
                            <p class="card-text">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            </p>
                            <a href="#" class="card-link">GitHub Link</a>
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
          <h1>Check Out Some M.Tech Internship Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio1 && resumeData.portfolio1.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                        <div className="portfolio-item-meta">
                          <div class="card" style={{width: "18rem", height: "10rem"}}>
                            <div class="card-body">
                              <h5 class="card-title"><h5>{item.name1}</h5></h5>
                              <p class="card-text"><p>{item.description1}</p></p>
                              <a href="#" class="btn btn-primary">GitHub Link</a>
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
          <h1>Check Out Some B.E Curriculum Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio2 && resumeData.portfolio2.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                        <div className="portfolio-item-meta">
                          <div class="card" style={{width: "18rem", height: "10rem"}}>
                            <div class="card-body">
                              <h5 class="card-title"><h5>{item.name2}</h5></h5>
                              <p class="card-text"><p>{item.description2}</p></p>
                              <a href="#" class="btn btn-primary">GitHub Link</a>
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
          <h1>Check Out Some B.E Internship Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio3 && resumeData.portfolio3.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      
                      <div className="">
                        <div className="portfolio-item-meta">
                          <div class="card" style={{width: "18rem", height: "10rem"}}>
                              <div class="card-body">
                                <h5 class="card-title"><h5>{item.name3}</h5></h5>
                                <p class="card-text"><p>{item.description3}</p></p>
                                <a href="#" class="btn btn-primary">GitHub Link</a>
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