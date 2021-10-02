import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';


const linkStyle = {
    color: "black",
    fontFamily: 'Poppins',
    fontWeight: 300
}

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#FA334E",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 4px #FA334E'
}

function NavBar(props) {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" collapseOnSelect expand="lg" variant="light">
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" style={linkStyle} className="mx-3">HOME</Nav.Link>
                        <Nav.Link href="/side" style={linkStyle} className="mx-3">Side</Nav.Link>
                        <Nav.Link href="/staffside" style={linkStyle} className="mx-3">StaffSide</Nav.Link>
                        <Nav.Link href="/manageOrder" style={linkStyle} className="mx-3">manageOder</Nav.Link>
                        <Nav.Link href="/staffeOder" style={linkStyle} className="mx-3">make Requsition</Nav.Link>
                        <Nav.Link href="/admin" style={linkStyle} className="mx-3">CONTACT</Nav.Link>
                        <Nav.Link href="/productManage" style={linkStyle} className="mx-3">Admin product manage</Nav.Link>
                        <Nav.Link href="/ShoppingAll" style={linkStyle} className="mx-3">All Shopping products</Nav.Link>

                        
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;