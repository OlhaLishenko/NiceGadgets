import React, {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { Product } from '../types/Product';
import products from '../../../../public/api/products.json';
import type { ProductDetails } from '../types/ProductDetails';
import { useParams } from 'react-router-dom';

type ProductListContextType = {
  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
  selectedProduct: ProductDetails | null;
  setSelectedProduct: Dispatch<SetStateAction<ProductDetails | null>>;
  productListDetails: ProductDetails[];
  setProductListDetails: Dispatch<SetStateAction<ProductDetails[]>>;
  isAside: boolean;
  setIsAside: Dispatch<SetStateAction<boolean>>;
};

export const ProductListContext = createContext<ProductListContextType>({
  productList: [],
  setProductList: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  productListDetails: [],
  setProductListDetails: () => {},
  isAside: false,
  setIsAside: () => {},
});

export const ProductListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [productListDetails, setProductListDetails] = useState<
    ProductDetails[]
  >([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(
    null,
  );

  const [isAside, setIsAside] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      const foundProduct = productListDetails.find(p => p.id === productId);
      if (foundProduct) {
        setSelectedProduct(foundProduct as ProductDetails);
      }
    }
  }, [productId]);

  return (
    <ProductListContext.Provider
      value={{
        productList,
        setProductList,
        selectedProduct,
        setSelectedProduct,
        productListDetails,
        setProductListDetails,
        isAside,
        setIsAside,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
