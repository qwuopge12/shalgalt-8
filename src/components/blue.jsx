import React from "react";
import {Link} from 'react-router-dom'
import Data from '../components/data'

function Blue () {
    const details = Data.map((props) => {
        if(props.id === 3){
            return(
                <>
                    

                <div className="w-full h-screen flex justify-center items-center">
                    <div className="w-[55%] h-[550px]">
                        <h1 className="text-5xl font-semibold mb-8">{props.title}</h1>
                        <img className="w-full h-[400px]" src={props.img}/>
                        <p className="text-1xl font-semibold mt-12">{props.description}</p>    
                        <p className="text-1xl font-semibold mt-8">{props.description1}</p>
                        <p className="text-1xl font-semibold ">{props.description2}</p>
                        <p className="text-1xl font-semibold ">{props.description3}</p>                  
                    </div>                   
                </div>
               </>
            );
        }else{
            return
        };
    })
    return(
        <>
        {details}        
        </>
    )
}
export default Blue