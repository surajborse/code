
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
// import { useForm, } from 'react-hook-form'
import { toast } from 'react-toastify';
function Login() {

    const history = useNavigate()

    const [pass, setPass] = useState(false)

    const click = () => {
        setPass(show => !show)
    }

    const [inputdata, setInputdata] = useState({
        email: "",
        password: ""
    })

    const getData = (e) => {
        const { value, name } = e.target
        setInputdata(() => {
            return {
                ...inputdata,
                [name]: value
            }
        })

    }

    useEffect(() => {

        localStorage.removeItem('login_data')
    }, [])


    const addData = (e) => {
        e.preventDefault();
        const getuserArr = localStorage.getItem('registration_data')
        // console.log(getuserArr)
        const { email, password } = inputdata
        if (!email.includes("@")) {
            toast.error("Please Email Is Requird", {
                autoClose: 2000,
            });
        } else if (password.length < 5) {
            toast.error("Please Password Is Requird", {
                autoClose: 2000,
            });
        } else {
            if (getuserArr && getuserArr.length) {

                const userdata = JSON.parse(getuserArr);
                console.log(userdata);
                const uselogin = userdata.filter((el, k) => {
                    // console.log(password);
                    return el.email === email && el.password === password
                });
                // console.log('uselogin', uselogin);
                if (uselogin.length === 0) {
                    toast.error(" Invalid Details ", {
                        autoClose: 2000,
                    });
                } else {
                    let login_user = JSON.stringify(uselogin[0])
                    history("/")
                    toast.success(" User Login Successful! ", {
                        autoClose: 2000,

                    });
                    localStorage.setItem("login_data", login_user)
                    console.log(login_user, email);
                }

            }

        }


    }






    return (
        <>
            <div className='login'>

                <form className='form' >

                    <div className='input-box'>
                        <label htmlFor="">E-Mail</label> <br />
                        <input type="text"

                            placeholder='Enter Your Email'
                            name='email'
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

                    <div className='input-box mt-4 text-center'>
                        <button type="submit" className='submit-btn' onClick={addData} >
                            Login
                        </button>
                    </div>

                    <Link to="/Registration" >Registration</Link>



                </form>


            </div>

        </>

    )
}

export default Login