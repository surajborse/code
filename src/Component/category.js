import React, { useState } from 'react'
import Card from '../Component/Card'
import Catbutton from './Catbutton'



function Category({ alldata,catNone=(true) }) {

    const allCatValues = ["All", ...new Set(alldata.map((Curelm) => Curelm.category)),];
    // console.log(allCatValues);
    const [item, setItem] = useState(alldata);

    const filterItem = (catItem) => {

        if (catItem === "All") {
            setItem(alldata);
            return
        }
        const updateItems = alldata.filter((curElem) => {
            return curElem.category === catItem;
        })
        setItem(updateItems)
    }

    return (
        <div>
            <h1>Filter</h1>
            {
                catNone ? <Catbutton filterItem={filterItem} allCatValues={allCatValues} /> : ""
            }

            <div className="menu mt-5">
                <Card item={item} />
            </div>
        </div>
    )
}

export default Category