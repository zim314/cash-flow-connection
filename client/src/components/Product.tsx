interface Props {
  product: Product;
}

interface Product {
  name: string;
  color: string;
  quantity: number;
  price: number;
  imgSrc: string;
}

const Product = ({ product }: Props) => {
  return (
    <section className="product_container">
      <div className="separate_container">
        <div className="separate_container_inside">
          <div className="img_container">
            <img src={product.imgSrc} alt={`icon ${product.name}`} />
          </div>

          <div className="info_container">
            <div>
              <p className="inter_body600 p_up">{product.name}</p>
              <p className="inter_body500 gray_color">{product.color}</p>
            </div>
            <div>
              <p className="inter_body400 gray_color">x {product.quantity}</p>
            </div>
          </div>
        </div>
        <div className="valor_container">
          <p className="inter_body600">${product.price}.00</p>
          <p className="inter_body400 gray_color">x</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
