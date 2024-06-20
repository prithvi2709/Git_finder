import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container ml-8' >
            <div className="text-content">
                <div >
                    <h1 className="text-7xl font-bold mb-6 pb-4 ">
                        Oops!
                    </h1>
                    <p className='text-3xl mb-8' >
                        404 - Page not found!
                    </p>
                    <Link to='/' className='btn btn-primary'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
