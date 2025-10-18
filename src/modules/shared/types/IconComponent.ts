export type IconComponent = {
  iconMain: React.FC<React.SVGProps<SVGSVGElement>> | string;
  iconSelected?: React.FC<React.SVGProps<SVGSVGElement>>;
};
