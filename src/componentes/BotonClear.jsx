import React from "react";

function BotonClear(props) {
  
    return (
      <div onClick={props.handleClear} className="boton-clear neon">
        {props.children}
      </div>
    );
  }
  
  export default BotonClear;