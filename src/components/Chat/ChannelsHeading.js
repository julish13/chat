import { useTranslation } from 'react-i18next';
import PlusSvg from '@assets/img/plus.svg';

const ChannelsHeading = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
      <span>{t('chat.channels')}</span>
      <button type="button" className="p-0 text-primary btn btn-group-vertical">
        <PlusSvg />
        <span className="visually-hidden">+</span>
      </button>
    </div>
  );
};

export default ChannelsHeading;
