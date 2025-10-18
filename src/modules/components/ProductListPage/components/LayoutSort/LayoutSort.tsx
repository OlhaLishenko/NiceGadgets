import React from 'react';
import './LayoutSort.scss';
import { Dropdown } from '../../../../shared/components/Dropdown';
import { SortTitle } from '../../../../shared/Enum/SortTitle';
import { Sort_By, Sort_By_Amount } from '../../../../shared/variables';

type LayoutSortProps = {};

export const LayoutSort: React.FC<LayoutSortProps> = ({}) => {
  const sort = Object.values(SortTitle);

  return (
    <section className="layout-sort">
      {sort.map(sortName => (
        <div className="layout-sort__item" key={sortName}>
          <Dropdown
            content={{
              title: sortName,
              options: sortName === SortTitle.SortBy ? Sort_By : Sort_By_Amount,
            }}
          />
        </div>
      ))}
    </section>
  );
};
