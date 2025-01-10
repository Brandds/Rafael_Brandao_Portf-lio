import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/barraDeNavegacao.css";

function BarraDeNavegacao(props) {
  return (
    <Navbar collapseOnSelect expand="lg"  >
      <Container>
        <Navbar.Brand className="text-primary fs-3">{props.nome}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-primary' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="links-navBar"  className="text-primary fs-4" href="#deets">{props.informacao.projeto}</Nav.Link>
            <Nav.Link id="links-navBar" className="text-primary fs-4" eventKey={2} href="#memes">
              {props.informacao.sobre}
            </Nav.Link>
            <Nav.Link id="links-navBar" className="text-primary fs-4" eventKey={2} href="#memes">
              {props.informacao.contato}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BarraDeNavegacao;