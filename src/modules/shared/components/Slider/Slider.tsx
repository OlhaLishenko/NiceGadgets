import './Slider.scss';
import classNames from 'classnames';
import { useRef, useState } from 'react';

type SliderProps = {
  content: {
    src: string;
    alt: string;
  }[];
};

export const Slider: React.FC<SliderProps> = ({ content }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (currentIndex: number) => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      left: currentIndex * containerRef.current.offsetWidth,
      behavior: 'smooth',
    });

    setSlideIndex(currentIndex);
  };

  const onRelease = () => {
    if (!containerRef.current) return;

    let closestIndex = 0;
    let minDiff = Infinity;

    const container = containerRef.current;
    const centerOfContainer = container.scrollLeft + container.offsetWidth / 2;
    const imageList = Array.from(container.children) as HTMLElement[];
    imageList.forEach((image, index) => {
      const imageCenter = image.offsetLeft + image.offsetWidth / 2;
      const diff = Math.abs(imageCenter - centerOfContainer);

      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    setSlideIndex(closestIndex);
  };

  return (
    <>
      <div className="slider">
        <div
          className="slider__image-wrapper"
          onMouseUp={onRelease}
          onTouchEnd={onRelease}
          ref={containerRef}
        >
          {content.map(contentItem => (
            <img
              className={classNames('slider__image')}
              src={contentItem.src}
              alt={contentItem.alt}
              key={contentItem.src}
              draggable="false"
            />
          ))}
        </div>
      </div>

      <div className="slider__buttons">
        {content.map((_, index: number) => (
          <button
            className={classNames('slider__buttons-button', {
              'slider__buttons-button--active': index === slideIndex,
            })}
            key={index}
            onClick={() => handleScroll(index)}
          ></button>
        ))}
      </div>
    </>
  );
};
