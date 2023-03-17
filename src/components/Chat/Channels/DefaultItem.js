import React from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';

const DefaultItem = ({ name, isActive, removable, changeChannelHandler }) => {
  const buttonClassname = classnames('w-100 rounded-0 text-start', {
    'text-truncate btn': removable,
  });

  return (
    <Button
      variant={isActive ? 'secondary' : null}
      className={buttonClassname}
      onClick={changeChannelHandler}
      type="button"
    >
      <span className="me-1">#</span>
      {name}
    </Button>
  );
};

export default DefaultItem;
