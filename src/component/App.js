import React, { Component } from 'react';
//Connect to store
import { connect } from 'react-redux'
//import bindaction react redux
import { bindActionCreators } from 'redux'
//import fucntions
import { selectCar } from '../actions/index'

import Owned from './Owned'
class App extends Component {
  renderInventory (){
    if(!this.props){
        return
    }
    let selectTheCar = this.props.selectCar;
    return this.props.inventory.filter((e)=>!e.owned).map((e,i) =>{
        return (
          <li 
          key={i} 
          onClick={() => selectTheCar(e)}
          >
          {e.brand} - {e.modal}   
          </li>
        )
    });
  }
  getSelectCar(){
    
    
    return (
      <div>
      {(this.props.selectedCar!=null?this.props.selectedCar.brand+' - '+this.props.selectedCar.modal:'')} 
      </div>
    )
}

  render() {
    return (
      <div className="App">
          <h1>Inventory</h1>
          <ul>{this.renderInventory()}</ul>
          <h1>Selected car</h1>
          <ul>{this.getSelectCar()}</ul>
          <h1>Owned</h1>
          <ul><Owned/></ul>
      </div>
    );
  }
}

//export default App;
//Connect to store

function mapStateToProps(state) {
  return {
    inventory: state.inventory,
    selectedCar:state.selectedCar,
    ownedCars:state.ownedCars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)