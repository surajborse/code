
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const getLocalItems = () => {

    let data = localStorage.getItem('registration_data');
    if (data) {
        return JSON.parse(localStorage.getItem('registration_data'));
    } else {
        return [];
    }
}


function Registration() {


    const history = useNavigate()

    const [data, setData] = useState(getLocalItems())
    const [inputdata, setInputdata] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        password: "",
        // cpassword: "",

    })

    // console.log(data.filter((d) => d.email === inputdata.email));

    const [pass, setPass] = useState(false)

    const click = () => {
        setPass(show => !show)
    }

    useEffect(() => {
        // const temp = JSON.stringify(data)
        localStorage.setItem("registration_data", JSON.stringify(data))
    }, [data,])



    const getData = (e) => {

        const { value, name } = e.target

        setInputdata(() => {
            return {
                ...inputdata,
                [name]: value
            }
        })
    }


    // if (email_exists.length) {
    //     return toast.error("Email already registered", {
    //         autoClose: 2000,
    //     });
    // } else 


    const addData = (e) => {
        e.preventDefault();

        const { fname, lname, email, number, password, cpassword } = inputdata

        // const email_exists = data.length && data.filter((d) => d.email === inputdata.email)

        if (fname === "") {
            toast.error("Please First Name Is Requird", {
                autoClose: 2000,
            });
        } else if (lname === "") {
            toast.error("Please Last Name  Is Requird", {
                autoClose: 2000,
            });
        } else if (email === "") {
            toast.error("Please  Email Is Requird", {
                autoClose: 2000,
            });
            // } else if (data.filter((d) => d.email === inputdata.email).length) {
            //     toast.error("use different email", {
            //         autoClose: 2000,
            //     });
        }
        else if (!email.includes("@")) {
            toast.error("Please Enter Valid Email", {
                autoClose: 2000,
            });
        }
        else if (number === '') {
            toast.error("Please Number Is Requird", {
                autoClose: 2000,
            });
        }
        else if (number.length < 10) {
            toast.error("Please Enter Valid Number", {
                autoClose: 2000,
            });
        } else if (password === '') {
            toast.error("Please Password Is Requird", {
                autoClose: 2000,
            });
        }
        else if (password.length < 5) {
            toast.error("Please Password Must be 5 char", {
                autoClose: 2000,
            });
        }
        else if (password !== cpassword) {
            toast.error("Please Password not same", {
                autoClose: 2000,
            });
        } else {
            history("/login")
            toast.success("Thank You", {
                autoClose: 2000,
            });


            localStorage.setItem('registration_data', JSON.stringify([...data, inputdata]));
        }
        setData(inputdata)

    }





    return (
        <>
            <div className='login'>
                <form className='form' >
                    <div className='input-box'>
                        <label htmlFor="">First Name</label> <br />
                        <input type="text" placeholder='Enter Your First Name'
                            name='fname'
                            onChange={getData}
                        />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Last Name</label> <br />
                        <input type="text"
                            placeholder='Enter Your Last Name'
                            name='lname'
                            onChange={getData}
                        />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">E-Mail</label> <br />
                        <input type="text"

                            placeholder='Enter Your Email'
                            name='email'
                            onChange={getData}
                        />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Mobile Number</label> <br />
                        <input type="text"
                            placeholder='Enter Your Number' name='number'
                            onChange={getData}
                        />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="">Password</label> <br />
                        <input type={pass ? "text" : "password"}
                            placeholder='Enter Your Password'
                            name='password'
                            onChange={getData}
                        />
                        <div className='pass' onClick={click}>
                            {
                                pass ? <AiFillEye /> : <AiFillEyeInvisible />
                            }

                        </div>
                    </div>

                    <div className='input-box'>
                        <label htmlFor=""> Confirm  Password</label> <br />
                        <input type={pass ? "text" : "password"}
                            placeholder='Enter Your Password'
                            name='cpassword'
                            onChange={getData}
                        />
                        <div className='pass' onClick={click}>
                            {
                                pass ? <AiFillEye /> : <AiFillEyeInvisible />
                            }
                        </div>
                    </div>
                    <div className='input-box mt-4 text-center'>
                        <button type="submit" className='submit-btn my-3' onClick={addData} >
                            Register
                        </button>
                        <Link to="/login" >Already Have an Account</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>

    )
}

export default Registration