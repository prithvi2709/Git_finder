import React from 'react'
import hourglass from './assets/Hourglass.gif';

const Spinner = () => {
    return (
        <div className='w-50'>
            <img
                width={50}
                className='text-center mx-auto'
                src={hourglass}
                alt='Loading...'
            />
        </div>
    )
}

export default Spinner
