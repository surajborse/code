import React, { useState } from 'react'
import Layout from '../Layout'
import Category from '../Component/category'
import alldata from '../alldata'


function About() {
  const data = alldata.menudata

  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }


  }
  return (
    <Layout>
      <Category alldata={data} catNone={true} />


      <div className='count-box' >
        <div>
          <h1> {count} </h1>
        </div>
        <div>
          <button onClick={dec}> 😆 - </button>
          <button onClick={inc}> 😉+ </button>
        </div>
      </div> 


    </Layout>
  )
}




export default About