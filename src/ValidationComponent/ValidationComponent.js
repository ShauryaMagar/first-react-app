import React from "react";

const Validation = (props) => {
    let messageLength = "";
    if(props.length <=5 ){
        messageLength = "Too Short"
    } else{
        messageLength=" Perfect!"
    }

  return (
      <div>
          <p> Length of text is {props.length} </p>
          {
              <p> {messageLength} </p>
          }
      </div>
      
  )
}

export default Validation;