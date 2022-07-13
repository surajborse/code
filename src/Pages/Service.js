import React from 'react'
import Layout from '../Layout'
import { RiAddCircleFill, RiDeleteBinLine } from "react-icons/ri"
import { useState } from 'react'
import { BiEdit } from "react-icons/bi"
import Category from '../Component/category'
import alldata from '../alldata'


function Service() {

    const data = alldata.menudatatwo
    const [input, setInput] = useState('')
    const [additem, setAdditem] = useState([])
    const [toggleBtn, setToggleBtn] = useState(true)
    const [editItemvalue, setEditItemvalue] = useState(null)

    const add = () => {

        if (!input.trim()) {
            alert("plz add data ")

        } else if (input && !toggleBtn) {
            setAdditem(
                additem.map((e) => {
                    if (e.id === editItemvalue) {
                        return { ...e, name: input }
                    }
                    return e;
                })
            )
            setToggleBtn(true)
            setInput('')
            setEditItemvalue(null)
        }

        else {
            const allinputdata = { id: new Date().getTime().toString(), name: input }
            setAdditem([...additem, allinputdata])
            setInput('')
        }

    }

    const deletitem = (index) => {
        
        const updateitem = additem.filter((e) => {
            return index !== e.id
        })

        setAdditem(updateitem)
    }
    
    const clear = () => {
        setAdditem([])
    }


    const editItem = (id) => {
        let newedit = additem.find((e) => {
            return e.id === id
        })
        console.log(newedit)

        setToggleBtn(false)
        setInput(newedit.name)

        setEditItemvalue(id)

    }

    return (
        <Layout>

            <div className="todo-box">
                <div className="input-box">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    {
                        toggleBtn ? <RiAddCircleFill onClick={add} /> : <BiEdit onClick={add} />
                    }
                </div>
                <div>
                    {
                        additem.map((e) => {
                            return (
                                <div className="add-item-box" key={e.id}>
                                    <h5> {e.name} </h5>
                                    <div>
                                        <BiEdit onClick={() => editItem(e.id)} />
                                        <RiDeleteBinLine onClick={() => deletitem(e.id)} />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button onClick={clear}>Clear All</button>
                </div>
            </div>


            <Category alldata={data}  catNone={true}  />

        </Layout>
    )
}

export default Service