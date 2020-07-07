import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';



export default function Profile({ photoURL, logout }) {

    return (
        <div className="btn-group">
            <button className="photo-login" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className='photo' src={photoURL}></img>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <button className='dropdown-item' type="button" ><Link className='nav-link' to='/agenda'>Mi Agenda</Link></button>
                <button className='dropdown-item' type="button" onClick={logout}><FiLogOut /></button>
            </div>
        </div>
    )
}



