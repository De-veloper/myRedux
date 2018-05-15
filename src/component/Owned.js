import React, { Component } from 'react';
//Connect to store
import { connect } from 'react-redux'
//import bindaction react redux
import { bindActionCreators } from 'redux'
//import fucntions
import { selectCar } from '../actions/index'

class Owned extends Component {
  getOwnedCar(){
    let selectTheCar2 = this.props.selectCar;
    return this.props.ownedCars.filter((e)=>e.owned).map((e,i) =>{
        return (
          <li 
          key={i} 
          onClick={() => selectTheCar2(e)}
          >
          {e.brand} - {e.modal}   
          </li>
        )
    });
  }
  render() {
    return (
          <div>{this.getOwnedCar()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Owned)