import React from 'react'
import { Button } from 'react-bootstrap'

function Boxone(props) {
  return (
    <div>
      <div className="small-box">
        <h2>Step 1</h2>
        <Button onClick={() => props.setMore(2)}>
          Go
        </Button>
      </div>
    </div>
  )
}

export default Boxone