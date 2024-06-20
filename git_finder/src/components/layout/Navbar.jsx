import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({title}) => {
    return (
        <nav className='navbar mb-12 bg-neutral shadow-lg text-neutral-content' >
            <div className="container mx-auto ">
                <div className="flex-none px-3 mx-3">
                    <FaGithub className='inline pr-1 mr-1 text-3xl' ></FaGithub>
                    <Link to='/' className='text-lg font-bold align-middle '> {title} </Link>
                </div>
            </div>

            <div className="flex-1 px-2 mx-2">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn '> Home </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn '> ABOUT </Link>
                {/* <Link to='/' className='btn btn-ghost btn-sm rounded-btn '> Home </Link>
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn '> Home </Link> */}
            </div>

        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
  }
  
  Navbar.propTypes = {
    title: PropTypes.string,
  }

export default Navbar;
