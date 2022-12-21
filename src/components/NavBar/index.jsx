import React from 'react'
import CartWidget from '../CartWidget'
import "./styles.css"

export default function NavBar() {

    return (
        <> 
       <div className='nav-bar'>
            <img className='logo' src='/assets/logo.png' alt='logo'/>
            <ul className='nav-list'>
                <li className='nav-option'>
                    <a href='#'>Home</a>
                </li> 
                <li className='nav-option'>
                    <a href='#'>Juegos Ps4</a>
                </li> 
                <li className='nav-option'>
                    <a href='#'>Juegos Ps5</a>
                </li>  
                <li className='nav-option'>
                    <a href='#'>Contacto</a>
                </li>   
            </ul>
        </div>  
        <div className='cart-container'>
            <CartWidget/>
        </div>
        </>

    )
}