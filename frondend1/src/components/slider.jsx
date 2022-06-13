import React from "react";
function slider(){
  return(
  <div className="carousel-item active">
                <div className="d-block w-100">
                    <div className="row">
                        <div className="container headercontent col-md-3 offset-md-2">
                            <h1 className="text-white headtext">INNOVATIVE<br/>
                                <span className="text-dark">SOLUTION</span>
                            </h1>
                            <p className="text-white">
                                We find the best solutions fot you, we redesign your home and work places.
                                Discover why over 5,100 home owners trust initiative
                            </p>

                            <button className="  readbtn">

                                Read More

                            </button>





                        </div>

                        <div className="container col-md-7 sliderimg">
                            <img className="headerimage" src="images/slider-img.png" alt="slider-img" />
                        </div>
                    </div>
                </div>
            </div>
         
  );

       
};
export default slider;