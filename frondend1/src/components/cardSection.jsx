 import React from "react";
 function cardsection() {
  function Cards(props) {
    return (
      <div className="col">
        <div className="aboutCard  ">
          <div className="imgcard">
            <img src={props.img} alt={props.alt}/>
          </div>
          <div className="cardtittle">
            <h2>{props.heading}</h2>
            <p>{props.tittle}</p>
          </div>
          <div className="cardbtn">
            <a href="" className=" cardbutton">
              Read Me
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" cardSection">
      <h1>WHY INITIATIVE COMPANY</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem
      </p>
      <div className=" row cards">
      <Cards
        img="images/card-img-1.png"
        src="img-1"
          heading="10 YEARS EXPERIENCE"
          tittle="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Morbi leo risus."
        />

        <Cards
        img="images/card-img-2.png"
        src="img-2"
          heading="A PRO ARCHITECTS TEAM"
          tittle="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Morbi leo risus."
        />
         <Cards
        img="images/card-img-3.png"
        src="img-3"
          heading="1000+ HAPPY CUSTOMERS"
          tittle="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Morbi leo risus."
        />

       
      </div>
    </div>
  );
}

export default cardsection;
