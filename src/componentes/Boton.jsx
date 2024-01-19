import React from "react";

function Boton(props) {

    const esOperador = (valor)=>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return (
      <div
      className={`boton-contenedor neonTexto neon ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={()=>props.handleClick(props.children)}>
      {props.children}
      </div>
    );
  }
  
  export default Boton;