import ProductList from "../components/ProductList";
import CouponSection from "../components/CouponSection";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

const OrderPage = () => {
  const [products, setProducts] = useState([
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
  ]);

  const [total, setTotal] = useState(
    products.reduce((acc, product) => acc + product.price, 0)
  );

  const handleDeleteProduct = (index: number) => {
    const newList = [...products];
    newList.splice(index, 1);
    setProducts(newList);
    setTotal(newList.reduce((acc, product) => acc + product.price, 0));
  };

  return (
    <div>
      <main>
        <section className="section_up">
          <ProductList
            products={products}
            deleteProduct={handleDeleteProduct}
          />
          <CouponSection totalNumber={total} />
        </section>
        <section className="section_donw">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default OrderPage;
