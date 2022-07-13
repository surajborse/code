import React, { useEffect, useRef, useState } from 'react'
import Layout from '../Layout'
import axios from "axios"
import alldata from '../alldata'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { AiOutlineCaretDown } from 'react-icons/ai'
import ApiModel from '../Component/ApiModel'

function ApiData() {

    const [data, setData] = useState([])
    const [product, setProduct] = useState({})
    const ref = useRef();
    const [select, setSelect] = useState("women's clothing")
    const [open, setOpen] = useState(false)
    const optionData = alldata.productdata
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/category/${select}`)
            .then((response) => {
                setData(response.data)
            })
    }, [select])




    return (
        <Layout>
            <div className='my-4'>



                <Container >

                    <div className="select-box my-4" ref={ref}>
                        <div className="select-value">
                            <AiOutlineCaretDown className={open ? "down up-arrow" : "down"} onClick={() => setOpen(!open)} />
                            {select}
                        </div>

                        {open &&
                            <div className="option"  >
                                <ul>
                                    {
                                        optionData.map((e, index) => {
                                            return (
                                                <div key={index}>
                                                    <li className={select === e.option ? "active " : ""} onClick={() => setSelect(e.option) || setOpen(!open)} > {e.option} </li>
                                                </div>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="product-list">
                        <Row className=' justify-content-center ' >
                            {
                                data.map((p, i) => {
                                    return (
                                        <Col xxl={3}    lg={4}  md={6}  key={i} className="my-3">
                                            <Card >
                                                <Card.Img variant="top" src={p.image} className="img-fluid" />
                                                <Card.Body>
                                                    <Card.Title className='title'> {p.title} </Card.Title>
                                                    <h4> ${p.price}</h4>
                                                    <Button variant="primary" onClick={() => {
                                                        setProduct(data[i])
                                                        handleShow();
                                                        console.log('done');
                                                        console.log(product);
                                                    }}>View More</Button>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className='mt-5'>
                        <ApiModel product={product} handleClose={handleClose} show={show} />
                    </div>





                </Container>
            </div>
        </Layout>
    )
}

export default ApiData