import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">{t('title')}</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
