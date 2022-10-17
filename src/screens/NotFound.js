import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ImageAsset from '@assets/img/not-found-img.svg';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img
        className="h-25 img-fluid"
        alt={t('notFound.title')}
        src={ImageAsset}
        width="250"
        height="250"
      />
      <h1 className="h4 text-muted">{t('notFound.title')}</h1>
      <p>
        <Trans i18nKey="notFound.text">
          Но вы можете перейти <Link to="/">на главную страницу</Link>
        </Trans>
      </p>
    </div>
  );
};

export default NotFound;
