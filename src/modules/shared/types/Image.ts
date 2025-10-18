export type ImageKey = 'primary' | 'accessories' | 'phones' | 'tablets';

export interface ImageData {
  src: string;
  alt: string;
}

// export type ImageMap = {
//   [P in ImageKey]: ImageData;
// };
