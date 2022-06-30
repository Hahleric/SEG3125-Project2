import {Container, Nav, Navbar} from "react-bootstrap";
import Button from 'react-bootstrap/esm/Button';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";

function MyNavbar() {
        return (
            <>
            <Navbar bg="light" variant="light" fixed={"bottom"}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>鸿宾楼</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>{"home"}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reservation">
                            <Nav.Link>{"reservation"}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            </>
        );
}

export default MyNavbar;