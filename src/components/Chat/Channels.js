import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Col, ButtonGroup, Button, Nav } from 'react-bootstrap';
import PlusSvg from '@assets/img/plus.svg';

const Channels = () => {
  const { t } = useTranslation();
  const { channels, currentChannelId } = useSelector((state) => state.chat);

  return (
    <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>{t('chat.channels')}</span>
        <ButtonGroup vertical className="p-0 btn text-primary">
          <PlusSvg />
          <span className="visually-hidden">+</span>
        </ButtonGroup>
      </div>
      <Nav as="ul" variant="pills" fill className="flex-column px-2">
        {channels.map(({ id, name }) => (
          <Nav.Item as="li" className="w-100">
            <Button
              variant={id === currentChannelId ? 'secondary' : null}
              className="w-100 rounded-0 text-start"
            >
              <span className="me-1">#</span>
              {name}
            </Button>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default Channels;
