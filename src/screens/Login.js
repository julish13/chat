import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '@components';
import loginImg from '@assets/img/login.jpeg';

const Login = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col xxl={6} className="col-12 col-md-8">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={loginImg} className="rounded-circle" alt={t('login.enter')} />
              </Col>
              <LoginForm />
            </Card.Body>
            <Card.Footer className="p-4" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
