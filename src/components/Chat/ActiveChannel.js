import { Col } from 'react-bootstrap';

const ActiveChannel = ({ children }) => {
  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">{children}</div>
    </Col>
  );
};

export default ActiveChannel;
