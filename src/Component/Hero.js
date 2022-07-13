import React from 'react'

function Hero(props) {
  return (
    <div>
        <h1> {props.name} </h1>
        <img src={props.img} alt="" />

        
    </div>
  )
}

export default Hero