import React from 'react';
import Profile from './Profile';

export default function UserElements(props) {
    const logInButton = () => {
        if (props.user) {
            return (<Profile photoURL={props.user.providerData[0].photoURL} 
                name={props.user.providerData[0].displayName} logout={props.logout} />)
        }
        else {
            return (<button className='btn btn-card-place' onClick={props.loginGoogle}>Iniciar sesión con Google</button>)
        }
    }

    return (
        <div className='nav-login'>{logInButton()}</div>
    )
}
