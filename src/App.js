import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonDel from './componentes/BotonDel';
import { motion } from 'framer-motion'
import { useState } from 'react';

const containerPantalla = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2.1,
      staggerChildren: 0.5
    }
  },
};

const containerButton = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: .75,
      staggerChildren: 0.25
    }
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const itemPantalla = {
  hidden: { y: 110, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function App() {

  const [valor, setValor] = useState('')

  const agregarValor = (miValor) => {
    setValor(valor + miValor)
  }

  const calcularResultado = () => {
    try {
      const resultado = eval(valor);
      setValor(Number.isInteger(resultado) ? resultado : resultado.toFixed(2));
    } catch (error) {
      alert('Operación no válida');
    }
  }

  const deleteValue = () => {
    setValor(valor.substring(0, valor.length - 1))
  }

  return (
    <div className="App">
      <div className='container-calc'>
        <motion.div className='parte-superior neon2'
          variants={containerPantalla}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemPantalla}><Pantalla valor={valor}></Pantalla></motion.div>
        </motion.div>

        <motion.div className='botonera-calc neon'
          variants={containerButton}
          initial="hidden"
          animate="visible"
        >
          <motion.div className='fila' variants={item}>
            <Boton handleClick={agregarValor}>1</Boton>
            <Boton handleClick={agregarValor}>2</Boton>
            <Boton handleClick={agregarValor}>3</Boton>
            <Boton handleClick={agregarValor}>+</Boton>
          </motion.div>
          <motion.div className='fila' variants={item}>
            <Boton handleClick={agregarValor}>4</Boton>
            <Boton handleClick={agregarValor}>5</Boton>
            <Boton handleClick={agregarValor}>6</Boton>
            <Boton handleClick={agregarValor}>-</Boton>
          </motion.div>
          <motion.div className='fila' variants={item}>
            <Boton handleClick={agregarValor}>7</Boton>
            <Boton handleClick={agregarValor}>8</Boton>
            <Boton handleClick={agregarValor}>9</Boton>
            <Boton handleClick={agregarValor}>*</Boton>
          </motion.div>
          <motion.div className='fila' variants={item}>
            <Boton handleClick={calcularResultado}>=</Boton>
            <Boton handleClick={agregarValor}>0</Boton>
            <Boton handleClick={agregarValor}>.</Boton>
            <Boton handleClick={agregarValor}>/</Boton>
          </motion.div>
          <motion.div className='fila' variants={item}>
            <BotonClear handleClear={() => setValor('')}>Clear</BotonClear>
            <BotonDel handleDel={deleteValue}>Del</BotonDel>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}

export default App;
