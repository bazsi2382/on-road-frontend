import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Login from "../modal/Login"

function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    {'OnRoad'}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Start" className="mr-sm-2"/>
                        <FormControl type="text" placeholder="Destination" className="mr-sm-2"/>
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Nav>
                <Nav>
                    <Button variant="outline-dark" onClick={() => setModalShow(true)}>Login</Button>
                </Nav>
            </Navbar>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}


export default Header;