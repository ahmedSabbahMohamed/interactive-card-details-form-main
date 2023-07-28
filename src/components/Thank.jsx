import React from 'react'
import complete from "../assets/images/icon-complete.svg"

function Thank() {
  return (
    <div className="thank text-center d-grid place-items-center">
        <div className='text-center mb-4'>
            <img
                className='img-flued'
                src={ complete }
                alt="complete"
            />
        </div>
        <h2 className='text-uppercase my-3'>Thank you!</h2>
        <p className='lead text-secondary fw-bold my-2'>We've added your card details</p>
        <button className='btn btn-lg w-100 text-white text-center my-3'>Continue</button>
    </div>
  )
}

export default Thank