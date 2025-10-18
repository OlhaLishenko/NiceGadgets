import React, { useContext, useEffect, useState } from 'react';
import './Dropdown.scss';
import { icons } from '../../../../global-assets/static';
import { SortContext } from '../../context/SortContext';
import { SortTitle } from '../../Enum/SortTitle';
import classNames from 'classnames';
import type { SortByAmount, SortByButtons } from '../../Enum/SortByButtons';
import { useLocation } from 'react-router-dom';

type DropdownProps = {
  content: {
    title: string;
    options: string[];
  };
};

export const Dropdown: React.FC<DropdownProps> = ({ content }) => {
  const [contentIsActive, setContentIsActive] = useState<boolean>(false);
  const location = useLocation();

  const IconArrowDown = icons.arrowDown.valuePath;
  const {
    selectedSortBy,
    setSelectedSortBy,
    selectedSortByAmount,
    setSelectedSortByAmount,
  } = useContext(SortContext);

  const defaultValue =
    content.title === SortTitle.SortBy ? selectedSortBy : selectedSortByAmount;

  useEffect(() => {
    setContentIsActive(false);
  }, [location]);

  useEffect(() => {
    setContentIsActive(false);
  }, [selectedSortBy, selectedSortByAmount]);

  const getDropdownContent = () => {
    setContentIsActive(!contentIsActive);
  };

  const changeSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentSort = event.currentTarget.textContent as SortByButtons;
    setSelectedSortBy(currentSort);
  };

  const changeSortPerPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentSort = event.currentTarget.textContent as SortByAmount;
    setSelectedSortByAmount(currentSort);
  };

  return (
    <div className="dropdown">
      <span className="dropdown__title">{content.title}</span>
      <div className="dropdown__content-wrapper">
        <button className="dropdown__trigger" onClick={getDropdownContent}>
          <IconArrowDown className="dropdown__trigger-icon" />
          <span className="dropdown__default-value content__item">
            {defaultValue}
          </span>
        </button>
        {/* content */}
        <div
          className={classNames('dropdown__content', {
            'dropdown__content--active': contentIsActive,
          })}
        >
          <ul className="content">
            {content.options
              .filter(i => i !== content.title)
              .map(sortItem => (
                <button
                  key={sortItem}
                  className="content__item"
                  onClick={
                    content.title === SortTitle.SortBy
                      ? changeSort
                      : changeSortPerPage
                  }
                >
                  <li key={sortItem}>{sortItem}</li>
                </button>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
