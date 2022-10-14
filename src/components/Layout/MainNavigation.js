import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import AuthContext from '@store/context/auth-context.js';

const MainNavigation = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>{t('navigation.title')}</Navbar.Brand>
        </LinkContainer>
        {isAuthenticated && (
          <Button variant="primary" onClick={logout}>
            {t('navigation.logout')}
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
