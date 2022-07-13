
import { useRef, useState } from "react"
import { useEffect } from "react"
import { Container, Table } from "react-bootstrap"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

import Layout from '../Layout'


function Demo() {


    const [tabledata, setTabledata] = useState([])   /*API data*/

    useEffect(() => {
        const showdata = async () => {
            // const data = await fetch(`https://fakestoreapi.com/products`);
            const data = await fetch(`https://randomuser.me/api`);
            const show = await data.json()
            setTabledata(show.results)
            console.log(tabledata)
        }
        showdata();
    }, [])

    // select option 

    const optionData = [
        {
            option: "suraj"
        },
        {
            option: "palak"
        }
        , {
            option: "maulik"
        }
        , {
            option: "kishor"    
        },
        {
            option: "raj"
        },
        {
            option: "karan"
        }
        , {
            option: "vijay"
        },
        {
            option: "dipak"
        },
        {
            option: "ram"
        }, {
            option: "dev"
        }
    ]




    const ref = useRef();


    const [select, setSelect] = useState("Select Value")

    const [open, setOpen] = useState(false)

    // const Getvalue = (value) => {
    //     setSelect(value)
    // }


    useEffect(() => {
        const clickOutside = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        };
        document.addEventListener("click", clickOutside)
        return () => {
            document.removeEventListener("click", clickOutside)
        }
    }, [open])


    // counter time =============


    const [expiryTime, setExpiryTime] = useState("4 sep 2022 12:00 ");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = () => {

        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }
            setCountdownTime(runningCountdownTime);
            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        }, 1000);
    }
    useEffect(() => {
        countdownTimer();
    });


    return (
        <Layout>

            <Container className="mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>gender</th>
                            <th>email</th>
                            <th>Name</th>

                            <th> image </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tabledata.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {e.gender} </td>
                                        <td> {e.email} </td>
                                        <td>  {e.name.title + ".   " + e.name.first + " " + e.name.last} </td>
                                        <td> <img src={e.picture.thumbnail} alt="" /> </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </Container>




            {['lg',].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link className="d-block d-lg-none" href="#action1">About</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        className="show"
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown

                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>


            ))}




            <h1>Dropdown select</h1>

            <div className="select-box" ref={ref}>
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
                                        <li key={index} className={select === e.option ? "active " : ""} onClick={() => setSelect(e.option) || setOpen(!open)}   > {e.option} </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>


            <h1>Hello {select} </h1>





            <div className="row">
                <div className="col-sm-6">
                    <h4 className="text-center ">React- Countdown Timer</h4>
                    <div className="btn-group my-3">
                        {expiryTime !== false ?
                            <>
                                <button type="button" className="btn btn-outline-success">{countdownTime.countdownDays} <sub>Days</sub></button>
                                <button type="button" className="btn btn-success">:</button>
                                <button type="button" className="btn btn-outline-success">{countdownTime.countdownHours} <sub>Hours</sub></button>
                                <button type="button" className="btn btn-success">:</button>
                                <button type="button" className="btn btn-outline-success">{countdownTime.countdownMinutes} <sub>Minutes</sub></button>
                                <button type="button" className="btn btn-success">:</button>
                                <button type="button" className="btn btn-outline-success">{countdownTime.countdownSeconds} <sub>Seconds</sub></button>
                            </>
                            : <p>Deal has been Expired</p>}
                    </div>
                </div>
            </div>


        </Layout>
    )

}

export default Demo


