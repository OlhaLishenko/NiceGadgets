import React from 'react';
import './CircleButton.scss';

type CircleButtonProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
};

export const CircleButton: React.FC<CircleButtonProps> = React.memo(
  ({ icon }) => {
    const isString = typeof icon === 'string';
    const iconText = icon as string;
    const IconMain = icon as React.FC<React.SVGProps<SVGSVGElement>>;

    console.log('is butn render');

    return (
      <div className="btn-circle">
        {isString ? (
          <span className="btn-circle__content">{iconText}</span>
        ) : (
          <IconMain className="btn-circle__image" />
        )}
      </div>
    );
  },
);
