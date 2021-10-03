
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';




const linkStyle = {
    color: "#fff",
    fontFamily: 'Poppins',
    fontWeight: 300
}

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#252F52",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 4px #252F52'
}

function NavBar(props) {
    return (
        <div>
            <Navbar className="shadow-sm p-3 navbar-custom" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/">Procurement</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">

                        <Nav.Link href="/" style={linkStyle} className="mx-3">HOME</Nav.Link>



                        <Nav.Link href="#" style={linkStyle} className="mx-3">ABOUT</Nav.Link>

                        <Nav.Link href="#" style={linkStyle} className="mx-3">CONTACT</Nav.Link>



                    </Nav>
                    <Nav>

                            <Form>
                                <Nav className="mx-auto">

                                </Nav>
                            </Form>

                            <Form>
                                <Button className="mx-3" variant="contained" style={buttonStyle} href="/login">Logout</Button>
                                {/*<Button className="mx-3" variant="contained" style={buttonStyle} href="/signup">Sign Up</Button>*/}
                            </Form>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;