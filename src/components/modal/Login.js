import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="User name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <a href="#">Sign up</a>
                <a href="#">Forgot password?</a>
            </Modal.Footer>
        </Modal>
    );
}


export default Login;