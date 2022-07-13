import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Can( { handleCloseone, showone , placement,name , children} ) {

    return (
        <>
            <Offcanvas show={showone} onHide={handleCloseone} placement={placement} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {name}
                {children}
               
                  
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


  export default Can
