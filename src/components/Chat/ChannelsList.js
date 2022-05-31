import { useSelector } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';

const ChannelsList = () => {
  const { channels, currentChannelId } = useSelector((state) => state.chat);
  return (
    <Nav as="ul" variant="pills" fill className="flex-column px-2">
      {channels.map(({ id, name }) => (
        <Nav.Item as="li" className="w-100" key={id}>
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
  );
};

export default ChannelsList;
