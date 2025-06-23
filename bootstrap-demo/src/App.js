import React from 'react';
import { Container, Navbar, Nav, Card, Button, Form } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bootstrap Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Bootstrap Card */}
        <Card>
          <Card.Body>
            <Card.Title>Welcome to Bootstrap React App</Card.Title>
            <Card.Text>This is a simple demo showing usage of Bootstrap in React.</Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>

        {/* Bootstrap Form */}
        <Form className="mt-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email.</Form.Text>
          </Form.Group>

          <Form.Group className="mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="mt-3" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
