import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/landing';
import Places from './componentsLugares/Places';
import Footer from './components/Footer'
import Foro from './componentsForo/Foro';
import Maps from './ComponentsMap/Maps';
import CardsGrid from './ComponentsView/CardsGrid';
import Agenda from './components/session/Agenda';
import Login from './components/session/Login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(class App extends Component {
constructor(props){
  super(props)
}

  render() {
    return (
      <div className='fondo'>
        <Landing />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={CardsGrid} />
            <Route exact path='/map' render={() => <Maps bool={true} lat={6.217} lng={-75.56} zn={13} typeClass='container-map' />} />
            <Route exact path='/places' component={Places} />
            <Route exact path='/foro' component={Foro} />
            <Route exact path='/agenda' render={()=> <Agenda user={this.props.user} />}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
)
