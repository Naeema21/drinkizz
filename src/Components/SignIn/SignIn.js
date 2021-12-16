import React, { useState } from 'react'
import { Modal, Tab, Tabs } from 'react-bootstrap';
const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <span onClick={handleShow} className="nav-link">
                <span> <i className='fa fa-user-o'> </i>&nbsp; Hello,sign In</span>
            </span >

            {/* modal */}
            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 flex-row">
                        <Tab eventkey="home" title="Sign In">
                           home
                        </Tab>
                        <Tab eventkey="profile" title="Sign Up">
                            profile
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SignIn
