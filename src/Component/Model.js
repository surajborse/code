import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

function Model({setOpenmodel}) {


   
    return (
        <div>

            <div className="model-background ">
                <div className="model">
                    <div className="model-title">
                        <h3>Title</h3>
                        <button onClick={()=>   setOpenmodel(false)  }    > <AiOutlineClose /> </button>
                    </div>

                    <div className="model-body">
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro deserunt expedita aut minus excepturi illum commodi! Ducimus, aspernatur consectetur veniam corrupti ab officiis culpa alias tempore, sit ea facilis.</h6>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro deserunt expedita aut minus excepturi illum commodi! Ducimus, aspernatur consectetur veniam corrupti ab officiis culpa alias tempore, sit ea facilis.</h6>
                    </div>

                   

                </div>

            </div>

        </div>
    )
}

export default Model