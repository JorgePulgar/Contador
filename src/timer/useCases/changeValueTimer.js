import Timer from "../timerEntity.js";
import {DEFAULT_TIME} from '../constants.js'; 
/**
 * 
 * @param {Timer} timer 
 */

export const increaseTimer = (timer) => {
    timer.remainingTime += 60 - (timer.remainingTime % 60)
     console.log("prueba increase timer")
}
/**
 * 
 * @param {Timer} timer 
 */

export const decreaseTimer = (timer) => {
    let remainingSeconds = timer.remainingTime % 60
    timer.remainingTime -= (remainingSeconds || 60)
     
}

export const reset = (timer) => {
    timer.remainingTime = DEFAULT_TIME
}