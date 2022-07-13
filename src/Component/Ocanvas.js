import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Ocanvas( { handleClose, show , placement,name , children} ) {
 
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement={placement} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas
                        {name}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {children}
                  
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


  export default Ocanvas
