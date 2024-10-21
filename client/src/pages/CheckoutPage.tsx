import ProductList from "../components/ProductList";
import CouponSection from "../components/CouponSection";
import ContactForm from "../components/ContactForm";

const CheckoutPage = () => {
  return (
    <div>
      <main>
        <section className="section_up">
          <ProductList />
          <CouponSection />
        </section>
        <section className="section_donw">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default CheckoutPage;
