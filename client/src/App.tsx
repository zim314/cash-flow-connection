import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CouponSection from "./components/CouponSection";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <div>
        <Header />
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
    </div>
  );
};

export default App;
