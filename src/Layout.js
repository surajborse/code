import React, { useState } from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect } from 'react';

function Layout(props) {


    const [toggle, setToggle] = useState()
    const [sidenone, setSidenone] = useState(true)
    const [loadeing, setLoadeing] = useState(false)

    useEffect(() => {
        setLoadeing(true)
        setTimeout(() => {
            setLoadeing(false)
        }, 500);

      
    }, [])

    return (
        <>
            <div >
                <div className={`${toggle ? "m-0" : sidenone ? '' : "m-0 py-0 "}  dashboard `}  >
                    {
                        <Header setToggle={setToggle} toggle={toggle} headernone={sidenone} />
                    }
                    <div>
                        {

                            loadeing ?
                                <div className='loader'>
                                    <BeatLoader
                                        size={40}
                                        color={"#767cd6"}
                                        loading={props.loader}
                                    />
                                </div>
                                :
                                <div>
                                    {props.children}
                                </div>
                        }

                    </div>

                    {
                        // <Footer />
                    }

                </div>
            </div>

            <Sidebar toggle={toggle} sidenone={sidenone} setLoadeing={setLoadeing} loading={loadeing} />
        </>
    )
}


export default Layout