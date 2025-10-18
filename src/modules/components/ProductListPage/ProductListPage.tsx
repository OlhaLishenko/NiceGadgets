import './ProductListPage.scss';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { ProductsNav } from '../../shared/components/ProductsNav';
import { LayoutSort } from './components/LayoutSort';
import { SortProvider } from '../../shared/context/SortContext';
import { ProductList } from './components/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import type { Product } from '../../shared/types/Product';
import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../shared/components/Loader';
import { ProductListContext } from '../../shared/context/ProductListContext';
import { CircleButton } from '../../shared/components/CircleButton';
import { icons } from '../../../global-assets/static';
import { pages } from '../../shared/variables';
import { PagePagination } from './components/PagePagination';
import phonesData from '../../../../public/api/phones.json';
import tabletsData from '../../../../public/api/tablets.json';
import accessoriesData from '../../../../public/api/accessories.json';
import type { ProductDetails } from '../../shared/types/ProductDetails';
import { MainHeader } from '../../shared/components/MainHeader';
import { NotificationProvider } from '../../shared/context/CartContext copy';

export const ProductListPage = () => {
  const { productList, setProductListDetails, productListDetails } =
    useContext(ProductListContext);
  const { category } = useParams();
  const navigate = useNavigate();

  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [loader, setLoader] = useState(true);

  const wait = (delay: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  };

  useEffect(() => {
    wait(0)
      .then(() => {
        const data: Product[] = getCurrentProductList();
        setCurrentProducts(data);
        const detailsData = getCurrentProductListDetails() as ProductDetails[];
        setProductListDetails(detailsData);
      })
      .catch(() => {
        throw new Error('Something was wrong');
      })
      .finally(() => {
        setLoader(false);
      });
  }, [category]);

  const getCurrentProductList = () => {
    if (!category) {
      navigate('/');
    }
    switch (category) {
      case 'phones':
        return [...productList].filter(
          (product: Product) => product.category === 'phones',
        );
      case 'tablets':
        return [...productList].filter(
          (product: Product) => product.category === 'tablets',
        );
      case 'accessories':
        return [...productList].filter(
          (product: Product) => product.category === 'accessories',
        );
      default:
        return [...productList];
    }
  };
  const getCurrentProductListDetails = () => {
    if (!category) {
      navigate('/');
    }
    switch (category) {
      case 'phones':
        return phonesData;
      case 'tablets':
        return tabletsData;
      case 'accessories':
        return accessoriesData;
      default:
        break;
    }
  };

  return (
    <div className="productList">
      <MainHeader
        pageTitle={'Mobile phones'}
        productAmount={productListDetails.length}
      />

      <div className="container-column">
        <SortProvider>
          <div className="productList__body">
            <LayoutSort />

            {loader ? (
              <Loader />
            ) : (
              <div className="products">
                <NotificationProvider>
                  <ProductList products={currentProducts} />
                </NotificationProvider>
              </div>
            )}
          </div>
          <div className="productList__pages">
            <PagePagination />
          </div>
        </SortProvider>
      </div>
    </div>
  );
};
