import React, { useContext, useEffect } from 'react';
import './ProductItem.scss';
import { useLocation, useParams } from 'react-router-dom';
import { ProductsNav } from '../../../../shared/components/ProductsNav';
import { SectionTitle } from '../../../../shared/components/SectionTitle/SectionTitle';
import { fetchData } from '../../../../shared/utils/fetchClient';
import { Loader } from '../../../../shared/components/Loader';
import phonesData from '../../../../../../public/api/phones.json';
import tabletsData from '../../../../../../public/api/tablets.json';
import accessoriesData from '../../../../../../public/api/accessories.json';
import type { ProductDetails } from '../../../../shared/types/ProductDetails';
import { ProductImage } from '../ProductImage';
import { ProductProperties } from '../ProductProperties';
import { ProductListContext } from '../../../../shared/context/ProductListContext';
import { ProductAbout } from '../ProductAbout';
import { ProductTechSpecs } from '../ProductTechSpecs';
import { ProductSlider } from '../../../../shared/components/ProductSlider';
import { SliderProvider } from '../../../../shared/context/SliderContext';
import { BackButton } from '../../../../shared/components/BackButton';

type ProductItemProps = {};

export const ProductItem: React.FC<ProductItemProps> = ({}) => {
  const location = useLocation();
  const productPrice = location.state?.productPrice;

  const { selectedProduct, setSelectedProduct, productList } =
    useContext(ProductListContext);
  const { category, productId } = useParams();
  const pathBack = `/${category?.toLowerCase()}`;

  useEffect(() => {
    let products: ProductDetails[] = [];

    switch (category) {
      case 'phones':
        products = phonesData;
        break;
      case 'tablets':
        products = tabletsData;
        break;
      case 'accessories':
        products = accessoriesData;
        break;
      default:
        products = [];
    }

    fetchData(products, 2000)
      .then(result => {
        const product = result.filter(
          selectedProduct => selectedProduct.id === productId,
        )[0];
        setSelectedProduct(product);
      })
      .catch(() => {
        throw new Error('Cant find selectedProduct item');
      });
  }, [productId]);

  const productData = {
    ...selectedProduct,
    ...productPrice,
  };

  const productProperties = [
    { name: 'screen', value: selectedProduct?.screen || null },
    { name: 'resolution', value: selectedProduct?.resolution || null },
    { name: 'processor', value: selectedProduct?.processor || null },
    { name: 'ram', value: selectedProduct?.ram || null },
    { name: 'capacity', value: selectedProduct?.capacity || null },
    { name: 'camera', value: selectedProduct?.camera || null },
    { name: 'zoom', value: selectedProduct?.zoom || null },
    { name: 'cell', value: selectedProduct?.cell || null },
  ];

  const relativeProducts = () => {
    const relativeId: number[] = [];

    for (let n = 1; n < 5; n++) {
      relativeId.push(Math.floor(Math.random() * productList.length));
    }

    const relativeProducts = productList.filter(product =>
      relativeId.includes(product.id),
    );

    return relativeProducts;
  };

  return (
    <>
      <div className="productItem">
        <div className="productItem__content-wrapper">
          {!selectedProduct ? (
            <Loader />
          ) : (
            <div className="productItem__content">
              <header className="productItem__header">
                <div className="header__productItem header">
                  <ProductsNav />
                  <BackButton
                    path={pathBack}
                    backState={{ productId: selectedProduct.id }}
                  />
                  <SectionTitle text={selectedProduct.name} />
                </div>
              </header>

              <div className="productItem__body">
                <ProductImage selectedProduct={selectedProduct} />

                <div className="productItem__details">
                  <ProductProperties product={productData} />
                  <ProductAbout
                    productDescription={selectedProduct.description}
                  />
                  <ProductTechSpecs properties={productProperties} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <SliderProvider>
        <ProductSlider
          content={{
            title: 'You may also like',
            data: relativeProducts(),
          }}
        />
      </SliderProvider>
    </>
  );
};
