import React from "react";
import Styles from '../container/home.module.css'
import { getClasses } from "./getClasses";
import Zuraghan from '../assets/tree-736885__480.jpg'

function Button ({variant,text,}) {
    
    const Types={        
        red:'red',
        blue:'blue',
        green:'green'
    }
    return(
        <div>
           <div
            className={getClasses([Styles.da, Styles[`da-${Types[variant]}`]])}>
           {text}
            </div>
        </div>
    )

} 
export default Button 