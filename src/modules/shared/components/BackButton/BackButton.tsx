import React from 'react';
import './BackButton.scss';
import { icons } from '../../../../global-assets/static';
import { useNavigate } from 'react-router-dom';
import { TextSmall } from '../TextSmall';

type BackButtonProps = {
  path?: string;
  backState?: Record<string, string>;
};

export const BackButton: React.FC<BackButtonProps> = ({ path, backState }) => {
  const IconBack = icons.arrowLeft.valuePath;
  const navigate = useNavigate();

  const handleBack = () => {
    if (path) {
      navigate(path, {
        state: backState,
      });
      return;
    }

    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
      return;
    }

    navigate('/home');
  };

  return (
    <button onClick={handleBack} className="back-button">
      <IconBack className="back-button__icon" />
      <TextSmall text={'Back'} />
    </button>
  );
};
