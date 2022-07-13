import React from 'react'

function Catbutton({ filterItem, allCatValues }) {
    return (
        <>
            <div className="tab-btn">
                {
                    allCatValues.map((curElem, val) => {
                        // console.log(curElem)
                        return <button key={val} onClick={() => filterItem(curElem)}> {curElem} </button>
                    })
                }

            </div>

        </>
    )
}

export default Catbutton