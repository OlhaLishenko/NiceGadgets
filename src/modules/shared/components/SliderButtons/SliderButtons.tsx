import React, { useContext } from 'react';
import './SliderButtons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SliderContext } from '../../context/SliderContext';

type CircleButtonProps = {
  itemAmount: number;
};

export const SliderButtons: React.FC<CircleButtonProps> = ({ itemAmount }) => {
  const { setButton, setCurrentSlideIndex, currentSlideIndex } =
    useContext(SliderContext);

  const handlePrevSlide = () => {
    setButton('prev');

    const index = currentSlideIndex === 0 ? 0 : currentSlideIndex - 1;
    setCurrentSlideIndex(index);
  };

  const handleNextSlide = () => {
    setButton('next');

    const index =
      currentSlideIndex === itemAmount - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(index);
  };

  return (
    <section className="btns-slider">
      <button
        className="btns-slider__btn btns-slider__btn--left"
        onClick={handlePrevSlide}
      >
        <FontAwesomeIcon
          className="btns-slider__btn__image"
          icon={faAngleLeft}
        />
      </button>
      <button
        className="btns-slider__btn btns-slider__btn--right"
        onClick={handleNextSlide}
      >
        <FontAwesomeIcon
          className="btns-slider__btn__image"
          icon={faAngleRight}
        />
      </button>
    </section>
  );
};
