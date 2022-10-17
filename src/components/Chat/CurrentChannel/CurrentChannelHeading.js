import React from 'react';
import { useTranslation } from 'react-i18next';

const CurrentChannelHeading = ({ name, count }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b># {name}</b>
      </p>
      <span className="text-muted">{t('chat.counter.count', { count })} </span>
    </div>
  );
};

export default CurrentChannelHeading;
