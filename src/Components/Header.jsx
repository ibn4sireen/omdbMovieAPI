import React,{useState} from 'react'
import '../Stlyes/HeaderStyles.css';
import logo from '../imgs/logo.png'

const Header = ({handleClick, handleChange, searchTitle}) => {
    
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" className="nav_img" />

            </div>
            <div className='search'>
                <input
                    type="text"
                    className="nav_search"
                    placeholder="Search Movie"
                    value = {searchTitle}
                    onChange={handleChange}
                />
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                onClick={handleClick}>
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l6 5.99L20.49 20l-5.99-6zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </div>
        </nav>
    )
}

export default Header
