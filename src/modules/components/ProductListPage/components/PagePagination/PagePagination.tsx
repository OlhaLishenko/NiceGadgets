import React from 'react';
import './PagePagination.scss';
import { icons } from '../../../../../global-assets/static';
import { pages } from '../../../../shared/variables';
import { CircleButton } from '../../../../shared/components/CircleButton';

type PagePaginationProps = {};

export const PagePagination: React.FC<PagePaginationProps> = ({}) => {
  return (
    <div className="page-pagination">
      <div className="page-pagination page-pagination--arrow">
        <CircleButton
          icons={{
            iconMain: icons.arrowLeft.valuePath,
          }}
        />
      </div>

      <div className="page-pagination page-pagination--list">
        {pages.map(page => (
          <CircleButton
            icons={{
              iconMain: `${page}`,
            }}
            key={page}
          />
        ))}
      </div>

      <div className="page-pagination page-pagination--arrow">
        <CircleButton
          icons={{
            iconMain: icons.arrowRight.valuePath,
          }}
        />
      </div>
    </div>
  );
};
