import React, { Component } from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth';
// import firebase from 'firebase/app';
import 'firebase/auth';
import firebase from '../../initializers/firebase';
import { connect } from 'react-redux';
import { saveToken } from '../../initializers/actions';
import { clearToken } from '../../initializers/actions';
import UserElements from './UserElements';

const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = {
    saveToken: saveToken,
    clearToken: clearToken
}

export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {

    // useEffect
    constructor(props) {
        super(props)
    }



    //--------Inicio de sesión con google--------------------
    loginGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider();

        //---------Permisos--------------

        provider.addScope('');

        //-------------------------------

        firebase.auth().signInWithPopup(provider).then(result => {
            let token = result.credential.accessToken;



            this.props.saveToken(token);
        }).catch(err => {
            console.log(err);
        })

    }
    //-------------------------------------------------------

    //------------Cerrar sesión------------------------------

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.props.clearToken();
        });
    }

    //-------------------------------------------------------
    render() {
        return (
            <UserElements
                loginGoogle={this.loginGoogle}
                logout={this.logout}
                token={this.props.token}
                user={this.props.user}
            />
        );
    }
}
)






