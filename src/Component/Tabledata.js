import React from 'react'
import { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

function Tabledata({ tableData, deleteitem, EditItem, setTableData }) {

    const [search, setSearch] = useState("");
    const [showperpage] = useState(5);        /* showper page number */
    const [counter, setCounter] = useState(1)  /* count page */


    let pagenumber = []

    for (let num = 1; num <= Math.ceil(tableData.length / 5); num++) {
        pagenumber.push(
            <Pagination.Item key={num} active={num === counter} onClick={() => setCounter(num)}>
                {num}
            </Pagination.Item>
        );
    }


    return (
        <div>
            <input type="text" placeholder='Search...' className='serach' onChange={(e) => {
                setSearch(e.target.value.trim());
            }} />

            <Table striped bordered hover>


                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                {
                    tableData.length !== 0 ?
                        <tbody>
                            {
                                tableData.filter((val) => {
                                    if (!search) {
                                        return val;

                                    } else
                                        if (
                                            val.fullName.toLowerCase().includes(search.toLowerCase()) || val.emailAddress.toLowerCase().includes(search.toLowerCase()) || val.city.toLowerCase().includes(search.toLowerCase()) || val.position.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return val;
                                        }
                                }).map((data, ind) => {

                                    if (ind >= ((counter - 1) * showperpage) && ind < showperpage * counter) {
                                        return (
                                            <tr key={ind} className="data-table">
                                                <td>{ind + 1}</td>
                                                <td className='capitle' >{data.fullName}</td>
                                                <td>{data.emailAddress}</td>
                                                <td className='capitle' >{data.city}</td>
                                                <td>{data.position}</td>
                                                <td className='edit' onClick={() => EditItem(data, ind)}> <BiEdit /> </td>
                                                <td className='delete' onClick={() => deleteitem(ind)}> <RiDeleteBinLine /> </td>
                                            </tr>
                                        )
                                    }
                                    return false;
                                })
                            }
                        </tbody>
                        :
                        <h1>Data Not Found</h1>



                }

                
            </Table>
            {
                tableData.length !== 0 ?
                    <div className='pagination'>
                        <Pagination>
                            <Pagination.First disabled={counter === Math.ceil(showperpage / 5)} onClick={() => setCounter(1)} />
                            <Pagination.Prev disabled={counter === Math.ceil(showperpage / 5)} onClick={() => { setCounter(counter - 1); console.log('disable') }} />
                            {pagenumber.map(e => { return e; })}
                            <Pagination.Next disabled={counter === Math.ceil(tableData.length / 5)} onClick={() => setCounter(counter + 1)} />
                            <Pagination.Last disabled={counter === Math.ceil(tableData.length / 5)} onClick={() => setCounter(Math.ceil(tableData.length / 5))} />
                        </Pagination>
                    </div>
                    : ""
            }
        </div>
    )
}
export default Tabledata




// else if (search && !val.fullName.toLowerCase().includes(search)) {
//     console.log('not found');
//     setMassage("data not found")
//     console.log(massage)
// }    






