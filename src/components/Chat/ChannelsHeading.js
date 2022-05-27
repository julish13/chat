import { useTranslation } from 'react-i18next';
import { ButtonGroup } from 'react-bootstrap';
import PlusSvg from '@assets/img/plus.svg';

const ChannelsHeading = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
      <span>{t('chat.channels')}</span>
      <ButtonGroup vertical className="p-0 btn text-primary">
        <PlusSvg />
        <span className="visually-hidden">+</span>
      </ButtonGroup>
    </div>
  );
};

export default ChannelsHeading;
