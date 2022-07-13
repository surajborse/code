import React, { useState } from 'react'
import { GoThreeBars } from "react-icons/go"
import { IoLogoGithub } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import Ocanvas from './Ocanvas';


function Header(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showone, setShowone] = useState(false);
    const handleCloseone = () => setShowone(false);
    const handleShowone = () => setShowone(true);

    return (

        <>
            {
                props.headernone ?

                    <div className={`${props.toggle ? "w-100" : props.sidenone ? '' : "m-0"}  header `} >
                        <div className="navbar">

                            <button onClick={() => props.setToggle(!props.toggle)}>
                                {
                                    !props.toggle ? <GoThreeBars /> : <AiOutlineClose />
                                }
                            </button>

                            <button onClick={handleShow}>Click me</button>

                            <button onClick={handleShowone}>Click start</button>

                            <div className='logo'>
                                <IoLogoGithub />
                            </div>
                        </div>

                        <Ocanvas handleClose={handleClose} show={show} placement="end" name="Hello" />

                        <Ocanvas handleClose={handleCloseone} show={showone} placement="start" name="" />

                    </div>
                    :
                    <>
                    </>
            }
        </>

    )
}

export default Header