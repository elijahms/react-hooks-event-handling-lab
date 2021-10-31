// Code Keypad Component Here
import React from 'react'

export const Keypad = () => {
    return (
        <div>
            <input onChange={(e) => {
                console.log("Entering password...")
        }} 
        type="password"/> 
        </div>
    )
}

export default Keypad;
