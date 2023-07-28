import React from 'react'
import cardFront from "../assets/images/bg-card-front.png"
import logo from "../assets/images/card-logo.svg"
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

function CardFront() {

    const {cardNum} = useSelector(state => state.what)
    const {name} = useSelector(state => state.what)
    const {mm} = useSelector(state => state.what)
    const {yy} = useSelector(state => state.what)

  return (
    <motion.div
        initial={{ x: "-100vw"}}
        animate={{ x: 0 }}
        transition={{ delay: .4, type: "spring", duration: .2, stiffness: 120}}
        className='card-front position-absolute'
    >
        <div className="position-relative rounded">
            <img
                className='front'
                src={ cardFront }
                alt="card-front"
            />
            <div className="front-absolute">
                <img
                    className='logo position-absolute'
                    src={ logo }
                    alt="logo"
                />
                <h1 className='position-absolute text-white fw-light'>{cardNum === ""? "0000 0000 0000 0000":cardNum}</h1>
                <p className="position-absolute text-white fw-light fs-4 p-0 m-0">{name === ""? "Jane Appleseed":name}</p>
                <span className="position-absolute text-white fw-normal fs-5 p-0 m-0">{mm === ""? "00":mm < 10? `0${mm}`:"mm"}/{yy === ""? "00":yy}</span>
            </div>
        </div>
    </motion.div>
  )
}

export default CardFront