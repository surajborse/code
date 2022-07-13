import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Demo from './Pages/Demo';
import { Component, useState } from 'react';
import { useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import Registration from './Pages/Registration';
import Userdata from './Pages/Userdata';
import Test from './Component/Test';
import { ToastContainer, } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';
import Protected from './Pages/Protected';
import Error from './Pages/Error';
import DemoForm from './Pages/DemoForm';
import ApiData from './Pages/ApiData';
function App() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  const user_login =  localStorage.getItem("login_data")

  return (

    


    <>




      <ToastContainer />
      {
        loader ?
          <div className='loader'>
            <BeatLoader
              size={40}
              color={"#767cd6"}
              loading={loader}
            />
          </div>
          :
          <div className="App" >

            <Routes>
              <Route path="/" element={ user_login ? <Protected /> : <Login/>} >
                <Route path="/" element={<Home />} />
                <Route path="About" element={< About />} />
                <Route path="Service" element={<Service />} />
                <Route path="demo" element={<Demo />} />
                <Route path="Userdata" element={<Userdata />} />
                <Route path="test" element={<Test />} />
                <Route path="DemoForm" element={<DemoForm />} />
                <Route path="ApiData" element={<ApiData />} />
              </Route>
              <Route path="/Registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div >


      }

    

    </>

  );
}

export default App;
