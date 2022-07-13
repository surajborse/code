import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Protected({ children }) {


  const navigate = useNavigate();

  let login = localStorage.getItem("login_data")

  useEffect(() => {
    // console.log(login);
    if (!login) {
      navigate('login')
    }
    else {
    
      // navigate('/')
      // console.log(login, "hii", " login");
    }
  }, [])


  return children ? children : <Outlet />
}

export default Protected