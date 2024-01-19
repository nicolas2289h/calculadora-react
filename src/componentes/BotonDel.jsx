import React from "react";

function BotonDel(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
    <div
      className={`boton-contenedor neon ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={props.handleDel}>
      {props.children}
    </div>
  );
}

export default BotonDel;