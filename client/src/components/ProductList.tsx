import ProductContent from "./Product";

interface Props {
  products: Product[];
  deleteProduct: (index: number) => void;
}
interface Product {
  name: string;
  color: string;
  quantity: number;
  price: number;
  imgSrc: string;
}

const ProductList = ({ products, deleteProduct }: Props) => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductContent
          key={product.name + index}
          product={product}
          index={index}
          deleteProduct={deleteProduct}
        />
      ))}
      <hr style={{ border: "1px solid var(--gray2)", marginBottom: "20px" }} />
    </div>
  );
};

export default ProductList;
