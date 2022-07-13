import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { FiLogOut } from "react-icons/fi"


function Sidebar(props) {

    const history = useNavigate()

    const user = JSON.parse(localStorage.getItem('login_data'))

    return (

        <>

            {
                props.sidenone ?

                    <div className={`${props.toggle ? "hide-sidebar" : ""} sidebar`}>
                        <div className="list">


                            <ul>
                                <div className="circle">
                                    <h2>Hello</h2>
                                    <h5>{user.fname}</h5>

                                    {/* <div className="user_information">
                                        <p>Name : <span>{user.fname + " " +  user.lname }  </span>   </p>
                                        <p>Email :  <span> {user.email} </span> </p>
                                        <p>Number :  <span>{user.number} </span>  </p>
                                    </div> */}
                                </div>

                                <li>  <Link to="/"> <AiOutlineHome /> Home</Link> </li>
                                <li>  <Link to="/About">  <BiUserCircle /> About</Link> </li>
                                <li>   <Link to="/Service"> <AiOutlineHome /> Service</Link> </li>
                                <li>    <Link to="/demo"> <BiUserCircle /> Contact</Link> </li>
                                <li>    <Link to="/Userdata"> <BiUserCircle /> User Data</Link> </li>
                                <li>    <Link to="/test"> <BiUserCircle /> Test</Link> </li>
                                <li>    <Link to="/DemoForm"> <BiUserCircle /> DemoForm</Link> </li>
                                <li>    <Link to="/ApiData"> <BiUserCircle /> ApiData</Link> </li>
                                <li>  <button onClick={() => {
                                    localStorage.removeItem('login_data')
                                    history("/login")
                                }}>  <FiLogOut /> Logout</button> </li>
                            </ul>
                        </div>
                    </div>
                    :
                    <>
                    </>

            }

        </>
    )

}

export default Sidebar