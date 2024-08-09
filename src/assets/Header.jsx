import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
function Header() {
  return (
    <Container fluid>
      <div className="fs-5">
        <Navbar data-bs-theme="dark" className=" p-3 bgimg">
          <Container>
            <Navbar.Brand href="#Home" className="fs-3">
              Hairnic
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Products">Products</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Button variant="dark">Shop Now</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
}
export default Header;
