import React from 'react';
import './SectionTitle.scss';

type SectionTitleProps = {
  text: React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return <h2 className="section-title">{text}</h2>;
};
