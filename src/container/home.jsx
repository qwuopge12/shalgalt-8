import React from "react";
import Button from "./button";
import Zuraghan from '../assets/tree-736885__480.jpg'
import '../container/home.css'
import {Link} from 'react-router-dom'


function Home () {
    const data = [
        {
            key:1,
            title:'TITLE1',
            img:Zuraghan,
            description1:'Lorem ipsuitaque lolestiae saepepraesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestiasvoluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam autem  voluptatibus.',
            button1: <Link to={'/red'}><Button variant='red' text='more' /></Link>
        },
        {
            key:2,
            title:'TITLE2',
            img:Zuraghan,
            description2:'Lorem s ullam quis corporiscinumq molestiae saepepraesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestiasvoluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam autem  voluptatibus.',
            description6:'Lorem ing elit. laudantium cumque, um. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestiasvoluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam autem  voluptatibus.',
            button2:<Link to={'/green'}><Button variant='green' text='more'/></Link>
        },
        {
            key:3,
            title:'TITLE3',
            img:Zuraghan,
            description3:'Lorem s ullam quis corporiscinumq molestiae saepepraesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestiasvoluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam autem  voluptatibus.',
            description4:'Lorem ing elit. laudantium cumque, um. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestiasvoluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam autem  voluptatibus.',
            button3:  <Link to={'/blue'}><Button variant='blue' text='more' /></Link>
        }
    ]
    return(
        <>
        <div className="body">
        {  
            data.map((row)=>(
                        
                            <div className="cart">
                                
                                    <h2>{row.title}</h2>
                                    <img src={row.img} alt='/'/>                                   
                                    <span>{row.description1}</span>
                                    <span>{row.description2}</span>
                                    <span>{row.description3}</span>
                                    <span>{row.description4}</span>
                                    <span>{row.description6}</span>
                                    <button>{row.button1}</button>
                                    <button>{row.button2}</button>
                                    <button>{row.button3}</button>
                                
                            </div>
                        
                
                    ))
        }
        </div>
        </>

    )
    
    // return(
    //     <div className="body">
    //         <div className="pontainer">
    //             <div className="container1">
    //                 <h1>TITLE1</h1>
    //                 <img src={Zurag} alt="" />
    //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    //                 Hic, neque. Totam itaque laudantium cumque, voluptatum minus molestiae saepe
    //                  praesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur 
    //                 exercitationem.       Similique reprehenderit delectus ullam quis corporis dicta molestias
    //                   voluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam 
    //                   autem  voluptatibus.</p>
    //                 <Link to={'/red'}><Button variant='red' text='more' /></Link>                   
    //             </div>
    //             <div className="container2">
    //             <h1>TITLE2</h1>
    //                 <img src={Zurag} alt="" />
    //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    //                 Hic, neque. Totam itaque laudantium cumque, voluptatum minus molestiae saepe
    //                  praesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur 
    //                  exercitationem. Similique reprehenderit delectus ullam quis corporis dicta molestias
    //                   voluptatum nulla!  cupiditate vel aliquam 
    //                    voluptatibus.</p>   
    //                   <br/>
    //                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    //                 Hic, neque. Totam itaque laudantium cumque, voluptatum minus molestiae saepe
    //                  praesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur 
    //                  exercitationem.  Totam itaque laudantium cumque, assumenda xercitationem minima quaerat vero                    
    //                   autem assumenda nostrum voluptatibus.</p>
    //                 <Link to={'/green'}><Button variant='green' text='more'/></Link>
    //             </div>
    //             <div className="container3">
    //             <h1>TITLE3</h1>
    //                 {/* <img src={Zurag} alt="" />
    //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    //                 Hic, neque. Totam itaque laudantium cumque, voluptatum minus molestiae saepe
    //                  praesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur 
    //                  exercitationem. Similique reprehenderit delectus ullam quis corporis dicta molestias
    //                   voluptatum 
    //                   autem assumenda nostrum voluptatibus.</p>
    //                   <br/>
    //                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    //                 Hic, neque. Totam itaque laudantium cumque, voluptatum minus molestiae saepe
    //                  praesentium. Sequi non dignissimos ullam beatae reprehenderit, sint aspernatur                      
    //                   voluptatum nulla! Exercitationem minima quaerat vero ipsa cupiditate vel aliquam 
    //                   autem assumenda nostrum voluptatibus.</p> */}
    //                 <Link to={'/blue'}><Button variant='blue' text='more' /></Link>
    //             </div>
               
    //         </div>
    //     </div>
    // )
} 
export default Home 

