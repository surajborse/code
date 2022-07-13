import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import Layout from '../Layout'
import Ocanvas from './Ocanvas';

const localdata = () => {
    let data = localStorage.getItem('tdata');
    if (data) {
        return JSON.parse(localStorage.getItem('tdata'));
    } else {
        return [];
    }
}







function Test() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [array, setArray] = useState([])
    const [currentid, setCurrentid] = useState([])
    const [updatebtn, setUpdatebtn] = useState(true)
    const [tdata, setTdata] = useState(localdata())

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
    })

    // show more card ==================


    const [data, setData] = useState([])

    const [moredata, setMoredata] = useState(4)

    const slice = data.slice(0, moredata)

    useEffect(() => {

        // const showdata = async () => {
        //     const dataaapi = await fetch(`https://fakestoreapi.com/products`);
        //     console.log(dataaapi.status, 'dataaapi');

        //     if (dataaapi.status === 200) {
        //         const show = await dataaapi.json()
        //         setData(show)
        //     } else {
        //         alert('Something went wrong')
        //     }
        // }
        // showdata();

        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data)
            })
    }, [])


    useEffect(() => {

        // const showdata = async () => {
        //     const dataaapi = await fetch(`https://fakestoreapi.com/products`);
        //     console.log(dataaapi.status, 'dataaapi');

        //     if (dataaapi.status === 200) {
        //         const show = await dataaapi.json()
        //         setData(show)
        //     } else {
        //         alert('Something went wrong')
        //     }
        // }
        // showdata();

        axios.get("https://newsapi.org/v2/top-headlines?country=at&apiKey=eaffc6a7e38e491d872c137d33edd982")
        // axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=eaffc6a7e38e491d872c137d33edd982")
            .then((response) => {
                console.log(response.data.articles, "hhhhhhhhhhhhhhhhhhhhh")
            })

    }, [])



    // console.log(slice.length !== moredata, slice.length, moredata, "hhhhhhhhhhhhhhhhhhhhhhhh")

    // show more card end ==================



    useEffect(() => {
        const savedata = JSON.stringify(tdata)
        localStorage.setItem("tdata", savedata)
        setArray(tdata)
    }, [tdata, updatebtn])


    const handleChange = (e) => {
        const newdata = (val) => ({ ...val, [e.target.name]: e.target.value })
        setFormdata(newdata)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formdata.name.trim() || !formdata.email.trim()
        ) {
            console.log("khali hai")
        } else {
            const storedata = (em) => ([...em, formdata])
            setTdata(storedata)
        }

        setFormdata({
            name: "",
            email: "",
        })
        console.log(tdata)
    }

    const Delete = (index) => {
        const deletdata = tdata.filter((d, id) => {
            return index !== id
        })
        setTdata(deletdata)
    }

    const Editdata = (d, v) => {
        setFormdata({
            name: d.name,
            email: d.email
        })
        console.log(v)
        setUpdatebtn(false)
        setCurrentid(v)
    }

    const Updatedata = (e) => {
        e.preventDefault()
        array[currentid].name = formdata.name
        array[currentid].email = formdata.email
        localStorage.setItem("tdata", JSON.stringify(array))
        setUpdatebtn(true)
        console.log(array)
        setFormdata({
            name: "",
            email: ""
        })
    }


    return (
        <Layout>
            <div>
                <Container>
                    <form action="" className='w-100'>
                        <Row>
                            <Col lg={6} >
                                <div className="input-box">
                                    <label htmlFor="">Name</label> <br />
                                    <input type="text" onChange={handleChange} value={formdata.name} name="name" required />
                                </div>
                            </Col>
                            <Col lg={6} >
                                <div className="input-box">
                                    <label htmlFor="">Name</label> <br />
                                    <input type="text" onChange={handleChange} value={formdata.email} name="email" required />
                                </div>
                            </Col>
                            <Col lg={12} >
                                <div className="input-box">
                                    {
                                        updatebtn ? <button onClick={handleSubmit}>Add</button> : <button onClick={Updatedata}>Update</button>
                                    }

                                </div>
                            </Col>

                        </Row>
                    </form>


                    <div className='mt-5'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> Name</th>
                                    <th>Email</th><th>delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tdata.map((d, id) => {
                                        return (
                                            <tr key={id}>
                                                <td> {id + 1} </td>
                                                <td> {d.name} </td>
                                                <td> {d.email} </td>
                                                <td onClick={() => Delete(id)} > <RiDeleteBinLine /></td>
                                                <td onClick={() => Editdata(d, id)}> <BiEdit /> </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>

                    </div>
                </Container>

                <Button onClick={handleShow} > click </Button>

            </div>

            <Ocanvas handleClose={handleClose} show={show} placement="start" name="  Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc."
            >
                <img src="https://images.unsplash.com/photo-1655929947078-263a3dea40aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />


            </Ocanvas>






            <Container>
                <Row className='testing-card'>
                    {
                        slice.map((e, val) => {
                            return (
                                <Col lg={3} key={val}>
                                    <Card className='mt-4'>
                                        <Card.Img variant="top" src={e.image} />
                                        <Card.Body>
                                            <Card.Title> {e.title} </Card.Title>
                                            <Card.Text>
                                                {e.description}
                                            </Card.Text>
                                            <Button variant="primary"> ${e.price} </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                    {

                        moredata === data.length ? null : <Button variant="danger" onClick={() => setMoredata(moredata + 4)}>More..</Button>

                    }



                </Row>
            </Container>


        </Layout>
    )
}

export default Test