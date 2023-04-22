import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const Login = ({ show, handleClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) {
        handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Form.Group controlId="username" style={{ width: '80%', marginBottom: '10px' }}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </Form.Group>
                
                <Form.Group controlId="password" style={{ width: '80%', marginBottom: '10px' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Form.Group>
    
                <Button variant="outline-dark" type="submit" style={{ width: '50%' }}>
                Submit
                </Button>
            </div>
            </Form>
        </Modal.Body>
        </Modal>
    );
  
};

export default Login;
