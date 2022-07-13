import React, { useEffect, useState } from 'react'
import { Container, } from 'react-bootstrap'
import Forminput from '../Component/Forminput'
import Tabledata from '../Component/Tabledata'
import Layout from '../Layout'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

const getLocalItems = () => {
    let data = localStorage.getItem('tableData');
    if (data) {
        return JSON.parse(localStorage.getItem('tableData'));
    } else {
        return [];
    }
}

function Userdata() {

    const [apidata, setApidata] = useState([])

    const [array, setArray] = useState([])
    const [ID, setID] = useState([])

    const [tableData, setTableData] = useState(getLocalItems())


    const [formInputData, setformInputData] = useState(
        {
            fullName: '',
            emailAddress: '',
            city: '',
            position: ''

        }
    );


    const [toggle, setTogggle] = useState(false)

    useEffect(() => {
        const temp = JSON.stringify(tableData)
        localStorage.setItem("tableData", temp)
        setArray(tableData)
    }, [tableData, toggle])


    const handleChange = (evnt) => {

        // const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        // setformInputData(newInput)

        const { value, name } = evnt.target

        setformInputData(() => {
            return {
                ...formInputData,
                [name]: value
            }
        })
    }





    const fullName = formInputData.fullName
    const emailAddress = formInputData.emailAddress
    const city = formInputData.city



    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        if (!formInputData.fullName.trim() ||
            !formInputData.emailAddress.trim() ||
            !formInputData.city.trim() ||
            !formInputData.position.trim())
             {
            console.log('Khaali hai');
            toast.error("Please All Feild Is Requird", {
                autoClose: 2000,
            });
        } else {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            // save data after clear input ==
            toast.success("Thank You Data Save", {
                autoClose: 1500,
            });

            axios.post('https://jsonplaceholder.typicode.com/posts',
                {
                    fullName,
                    emailAddress,
                    city,
                }
            )
                .then((res) => {
                    setApidata(res.data, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
                })

            const emptyInput = { fullName: '', emailAddress: '', city: '', position: '' }
            setformInputData(emptyInput);
        }
    }





    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log(formInputData, array);
        array[ID].fullName = formInputData.fullName
        array[ID].emailAddress = formInputData.emailAddress
        array[ID].city = formInputData.city
        array[ID].position = formInputData.position
        // let updatedArray = array
        // console.log(JSON.stringify(array));
        localStorage.setItem("tableData", JSON.stringify(array))
        setTogggle(false)
        setformInputData(
            {
                fullName: '',
                emailAddress: '',
                city: '',
                position: ''
            }
        )
    }


    // console.log(tableData)

    const deleteitem = (id) => {
        // console.log(id, "Hello")
        const updateitems = tableData.filter((data, ind) => {
            return ind !== id;
        })
        setTableData(updateitems)
    }

    const EditItem = (data, i) => {
        // console.log(i);
        setformInputData({
            fullName: data.fullName,
            emailAddress: data.emailAddress,
            city: data.city,
            position: data.position
        })
        setTogggle(true)
        setID(i)
    }

    return (
        <Layout>
            <Container>
                <Forminput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleUpdate={handleUpdate} toggle={toggle} />
                <Tabledata tableData={tableData} deleteitem={deleteitem} EditItem={EditItem} setTableData={setTableData} />
            </Container>
            <ToastContainer />
            <div>
                <h1>{apidata.fullName} </h1>
                <h1>{apidata.emailAddress} </h1>
                <h1>{apidata.city} </h1>
            
            </div>

        </Layout >
    )
}


export default Userdata