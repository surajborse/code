import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Forminput({ handleChange, formInputData, handleSubmit, handleUpdate, toggle }) {
    return (
        <form className='w-100'>
            <Row className='py-4'>

                <Col lg={6}>
                    <div className="input-box">
                        <label htmlFor="">Full Name</label> <br />
                        <input type="text" onChange={handleChange} value={formInputData.fullName} required name="fullName" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="input-box">
                        <label htmlFor="">Email</label> <br />
                        <input type="text" onChange={handleChange} value={formInputData.emailAddress} required name="emailAddress" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="input-box">
                        <label htmlFor="">City</label><br />
                        <input type="text" onChange={handleChange} value={formInputData.city} required name="city" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="input-box">
                        <label htmlFor=""> Number </label><br />
                        <input type="number" onChange={handleChange} value={formInputData.position} required name="position" />
                    </div>
                </Col>
               
                <Col lg={12}>
                    <div className="input-box">
                        {
                            toggle ?
                            <button onClick={handleUpdate}>Update</button>
                            : 
                            <button onClick={handleSubmit}>Add</button> 
                        }

                    </div>
                </Col>

            </Row>
        </form>

    )
}

export default Forminput