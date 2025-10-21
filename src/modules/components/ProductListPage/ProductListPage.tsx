import './ProductListPage.scss';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { ProductsNav } from '../../shared/components/ProductsNav';
import { LayoutSort } from './components/LayoutSort';
import { SortProvider } from '../../shared/context/SortContext';
import { ProductList } from './components/ProductList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { Product } from '../../shared/types/Product';
import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../shared/components/Loader';
import { ProductListContext } from '../../shared/context/ProductListContext';
import { PagePagination } from './components/PagePagination';
import phonesData from '../../../../public/api/phones.json';
import tabletsData from '../../../../public/api/tablets.json';
import accessoriesData from '../../../../public/api/accessories.json';
import type { ProductDetails } from '../../shared/types/ProductDetails';
import { MainHeader } from '../../shared/components/MainHeader';
import { getCurrentProductList } from '../../shared/servises/getCurrentProductList';
import { getProductPageTitle } from '../../shared/servises/getProductPageTitle';

export const ProductListPage = () => {
  const { productList, setProductListDetails, productListDetails } =
    useContext(ProductListContext);
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [loader, setLoader] = useState(true);

  const wait = (delay: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  };

  useEffect(() => {
    wait(2000)
      .then(() => {
        if (!category) {
          navigate('/');
        } else {
          const data = getCurrentProductList(
            category,
            productList,
            'products',
          ) as Product[];
          setCurrentProducts(data);
          const detailsData = getCurrentProductList(
            category,
            productList,
            'details',
          ) as ProductDetails[];
          setProductListDetails(detailsData);
        }
      })
      .catch(() => {
        throw new Error('Something was wrong');
      })
      .finally(() => {
        setLoader(false);
      });
  }, [category]);

  // const getCurrentProductList = () => {
  //   if (!category) {
  //     navigate('/');
  //   }
  //   switch (category) {
  //     case 'phones':
  //       return [...productList].filter(
  //         (product: Product) => product.category === 'phones',
  //       );
  //     case 'tablets':
  //       return [...productList].filter(
  //         (product: Product) => product.category === 'tablets',
  //       );
  //     case 'accessories':
  //       return [...productList].filter(
  //         (product: Product) => product.category === 'accessories',
  //       );
  //     default:
  //       return [...productList];
  //   }
  // };
  // const getCurrentProductListDetails = () => {
  //   if (!category) {
  //     navigate('/');
  //   }
  //   switch (category) {
  //     case 'phones':
  //       return phonesData;
  //     case 'tablets':
  //       return tabletsData;
  //     case 'accessories':
  //       return accessoriesData;
  //     default:
  //       break;
  //   }
  // };

  if (!category) {
    navigate('/');
    return;
  }

  return (
    <div className="productList">
      <div className="productList__content">
        <MainHeader
          pageTitle={getProductPageTitle(category)}
          productAmount={productListDetails.length}
        />
        <SortProvider>
          <LayoutSort />

          {loader ? (
            <Loader />
          ) : (
            <div className="products">
              <ProductList products={currentProducts} />
            </div>
          )}
          <div className="productList__pages">
            <PagePagination />
          </div>
        </SortProvider>
      </div>
    </div>
  );
};
