import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Card({ item }) {
    return (
        <>
            <Container>
                <Row>
                    {
                        item.map((e, val) => {
                            return (
                                <Col xl={4} key={val}>
                                    <div className="card my-3">
                                        <img src={e.img} alt="" className='img-fluid' />
                                        <div className="card-title">
                                            <h4>{e.title}</h4>
                                            <p> {e.dis} </p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </>
    )
}

export default Card