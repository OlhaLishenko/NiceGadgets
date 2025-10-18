import React from 'react';
import './CircleButton.scss';
import type { IconComponent } from '../../types/IconComponent';
import classNames from 'classnames';

type CircleButtonProps = {
  icons: IconComponent;
};

export const CircleButton: React.FC<CircleButtonProps> = ({ icons }) => {
  const isString = typeof icons.iconMain === 'string';
  const iconText = icons.iconMain as string;

  return (
    <button
      className={classNames('btn-circle', {
        'btn-circle--productCard': icons.iconSelected,
        'btn-circle--footer': !icons.iconSelected,
      })}
    >
      {isString ? (
        <span className="btn-circle__content">{iconText}</span>
      ) : (
        <>
          <icons.iconMain className="btn-circle__image" />
          {icons.iconSelected && (
            <icons.iconSelected className="btn-circle__image btn-circle__image--select" />
          )}
        </>
      )}
    </button>
  );
};
