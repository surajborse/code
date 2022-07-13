import React from 'react'
import { useState } from 'react'
import Boxone from '../Component/Boxone'
import BoxTwo from '../Component/BoxTwo'
import Boxthree from '../Component/Boxthree'
import Model from '../Component/Model'
import Layout from '../Layout'
import { Link } from 'react-router-dom'

function Home() {

  const [more, setMore] = useState(1)
  const [openmodel, setOpenmodel] = useState(false)
  console.log(more === 1, more === 2)
  return (
    <Layout>
      <div className='box'>
        {
          more === 1 ?
            <Boxone setMore={setMore} /> :
            more === 2 ?
              <BoxTwo setMore={setMore} /> :
              <Boxthree setMore={setMore} />
        }
      </div>
      <button className='menu-btn' onClick={() => setOpenmodel(true)} >Click</button>
       {openmodel && <Model setOpenmodel={setOpenmodel} openmodel={openmodel} />}
       <Link to="" download="name" >click</Link>
    </Layout>
  )
}

export default Home