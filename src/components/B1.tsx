import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function B1() {
  return (
    <div>
      <Container style={{ marginTop: "70px", maxWidth: "50%" }}>
        <Row>
          <Col md={6}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLTSS4aVD8QyRmprp8XIkMnQJ-d2gT4REjiX4r6tGoE-p0Jjmo"
              alt=""
            />
          </Col>
          <Col md={6}>
            <Form>
              <h3>Login</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p style={{ textAlign: "end", margin: 0 }}>Forgot password?</p>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                Submit
              </Button>
            </Form>
            <div
              style={{display: "flex",justifyContent: "center",alignItems: "center",gap: "10px",marginBottom: "14px",}}>
              <div
                style={{ width: "100%",height: "1px",backgroundColor: "#dbdbdb",}}></div>
              <span>or</span>
              <div
                style={{width: "100%",height: "1px",backgroundColor: "#dbdbdb",}}></div>
            </div>
            <Button variant="light" type="button" style={{width: "100%",marginBottom: "20px",border: "1px solid #dbdbdb",}}>
                  Register now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
