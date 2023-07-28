import React from 'react'
import cardBack from "../assets/images/bg-card-back.png"
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function CardBack() {

  const {cvc} = useSelector(state => state.what)

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: .2, type: "spring", duration: .5, stiffness: 120 }}
      className='card-back position-absolute'
    >
        <div className="position-relative rounded">
            <img
                className='back'
                src={ cardBack }
                alt="card-front"
            />
            <p className='position-absolute text-black'>{cvc === ""? "000":cvc}</p>
        </div>
    </motion.div>
  )
}

export default CardBack