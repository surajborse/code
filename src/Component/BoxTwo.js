import React from 'react'
import { Button } from 'react-bootstrap'

function BoxTwo(props) {
    return (
        <div className="small-box">
            <h2>Step 2</h2>
            <Button onClick={() => props.setMore(1)} className="me-4">
                back
            </Button>
            <Button onClick={() => props.setMore(3)}>
                Go
            </Button>
        </div>
    )
}

export default BoxTwo