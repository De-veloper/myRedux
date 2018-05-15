//1. Set default State 
//2. import actions to here
import {SELECT_CAR} from '../actions/types'

export const defaultState = {
    inventory:[
        {
            brand:'Mazda',
            modal:'RX7',
            owned:false
        },
        {
            brand:'Subaru',
            modal:'WRX',
            owned:false
        },
        {
            brand:'Honda',
            modal:'Rebel',
            owned:false
        },
        {
            brand:'BMC',
            modal:'ALR01',
            owned:false
        },
        {
            brand:'Vilano',
            modal:'Shadow',
            owned:false
        }
    ],
    selectedCar:null,
    ownedCars:[]
}

export default function carReducer (state =  defaultState, action){
    switch(action.type){
        case SELECT_CAR:
            let updateOwnedCars = state.ownedCars;
            if(updateOwnedCars.indexOf(action.payload)===-1) updateOwnedCars.push(action.payload)
            //console.log(updateOwnedCars)
            return { ...state,inventory:state.inventory.map((e)=>{if(e.brand===action.payload.brand) {e.owned = !e.owned} return e}),selectedCar: action.payload,ownedCars:updateOwnedCars }
        default:
            return defaultState
    }

}