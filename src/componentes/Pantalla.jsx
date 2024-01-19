import React from "react";
import { motion } from 'framer-motion'

function Pantalla({ valor }) {

  return (
    <>
      <div className="input neon2">
        <motion.p initial={{ x: 150 }} animate={{ x: 0 }} transition={{ delay: 2.6 }}>{!valor ? 'Infinity' : valor}</motion.p>
      </div>
    </>
  );
}

export default Pantalla;