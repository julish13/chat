import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import signupImg from '@assets/img/signup.jpg';
import { SignupForm } from '@components';

const Signup = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xxl={6} className="col-12 col-md-8">
          <Card className="shadow-sm">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img src={signupImg} className="rounded-circle" alt={t('signup.title')} />
              </div>
              <SignupForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
