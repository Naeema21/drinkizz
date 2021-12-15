import React from 'react'
import { Tab,Nav } from 'react-bootstrap'

const Account = () => {
    return (
        <div className='account'>
            <div className='container'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className='row'>
                    <div className='col-3'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className='col-9'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h1>fghj</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>fgh</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
            </div>
        </div>
    )
}

export default Account
