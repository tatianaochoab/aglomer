import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='social'>
            <div className='siguenos'>
                <div className='title-sig'>
                    <p>Siguenos!</p>
                </div>
                <div className='icons'>
                    <a ><FiFacebook className='icons-social' /></a>
                    <a><FiTwitter className='icons-social' /></a>
                    <a><FiLinkedin className='icons-social' /></a>
                    <a><FiGithub className='icons-social' /></a>
                </div>
            </div>
            <div className='contactanos'>
                <div className='title-con'>
                    <p>Contactanos</p>
                </div>
                <form className='formulario'>
                <input className='input-email' placeholder='comentario' type='text' />
                    <input className='input-email' placeholder='email' type='email' />
                    <input type='submit' className='btn btn-card-place' />
                </form>
            </div>
            </div>
            <div className='derechos'>
                <p>Todos los derechos reservados</p>
            </div>
        </div>
    )
}
