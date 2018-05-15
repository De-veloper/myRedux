import {SELECT_CAR} from './types'

export function selectCar(car) {
    return {
        type:SELECT_CAR,
        payload:car
    } 
}