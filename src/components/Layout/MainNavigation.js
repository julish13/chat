import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MainNavigation = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Hexlet Chat</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
