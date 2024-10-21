import Product from "./Product";

const products = [
  {
    name: "iPhone 12 Pro",
    color: "Golden",
    quantity: 1,
    price: 999,
    imgSrc: "/img/Gold.png",
  },
  {
    name: "Apple Watch",
    color: "Blue",
    quantity: 1,
    price: 399,
    imgSrc: "/img/Blue.png",
  },
  {
    name: "iMac",
    color: "Green",
    quantity: 1,
    price: 1199,
    imgSrc: "img/iMac=Front 1.png",
  },
];

const ProductList = () => {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <hr style={{ border: "1px solid var(--gray2)", marginBottom: "20px" }} />
    </div>
  );
};

export default ProductList;
