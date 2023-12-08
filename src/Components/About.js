import React from "react";

export default function About(props) {
    // const [mystyle, toggleStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btntext, chgTxt] = useState("Enable Dark Mode")
    // const ToggleStyle = ()=>{
    //     if (mystyle.color === 'white'){
    //         toggleStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         chgTxt("Enable Dark Mode")
    //     }
    //     else{
    //         toggleStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //         })
    //         chgTxt("Enable Light Mode")
    //     }
    // }

  return (
    <>
      {/* <div className="accordion container" id="accordionExample" style={mystyle}> */}
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <div className="accordion container" id="accordionExample" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
            //   style={mystyle}
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Introduction</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={mystyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}>
              <strong>Welcome to Text Utils </strong>Your Ultimate Text Transformation Tool!
                 At Text Utils, we understand the power of words and the impact they can have. 
                 Our project was born out of a simple yet profound idea: to empower users with a tool 
                 that makes text manipulation effortless and efficient. Whether you need to convert text to uppercase, 
                 lowercase, or simply copy it to the clipboard, Text Utils is here to streamline your experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
            //   style={mystyle}
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Our Mission</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={mystyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}>
              <strong>At Text Utils,</strong>  our mission is to simplify the way you interact with text.
               We believe that everyone should have access to tools that enhance their productivity and make 
               everyday tasks a breeze. With a user-friendly interface and powerful functionality, 
               Text Utils aims to be the go-to solution for individuals and professionals alike. 
               Our commitment is to provide a reliable, fast, and secure platform that caters to your
               text transformation needs, ensuring that you can focus on what matters most while we take care of the rest.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
            //   style={mystyle}
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              <strong>User-Friendly Interface</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={mystyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}>
              <strong>We believe in the power of simplicity.</strong> 
               Text Utils features an intuitive and clean interface, 
              making it accessible for users of all levels. No need for extensive tutorials – start transforming your text immediately!
            </div>
          </div>
        </div>
        <div className="container my-3">
        <strong>Text Utils is more than just a project; it's a tool designed with you in mind. 
        Join us on this journey of transforming text effortlessly, and let Text Utils be your reliable companion in the world of words.</strong>
        </div>
      </div>
      </div>
      {/* <div className="container" style={mystyle}> */}
      {/* <div className="container" style={{backgroundColor: props.mode ==='dark'?'grey':'white'}}>
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={ToggleStyle}
        >
          {btntext}
        </button>
      </div> */}
    </>
  );
}
