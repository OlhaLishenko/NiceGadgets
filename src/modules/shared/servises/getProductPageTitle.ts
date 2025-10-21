export const getProductPageTitle = (category: string) => {
  let pageTitle = '';

  switch (category) {
    case 'phones':
      pageTitle = 'Mobile phones';
      break;
    case 'tablets':
      pageTitle = 'Tablets';
      break;
    case 'accessories':
      pageTitle = 'Accessories';
      break;
    default:
      '';
  }

  return pageTitle;
};
