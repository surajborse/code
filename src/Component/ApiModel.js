import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

function ApiModel({ product, handleClose, show }) {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title className='top-title'> {product.category} </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>

                    <div className='product-detail-box'>
 
                        <div>
                            <img src={product.image} alt="" />
                        </div>

                        <div className='detail ms-5'>
                            <h4> {product.title}</h4>
                            <p> {product.description}</p>
                            <div>
                                <h5> ${product.price} </h5>

                                <Button>Add To Cart</Button>
                            </div>
                        </div>




                    </div>

                </Modal.Body>


                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ApiModel