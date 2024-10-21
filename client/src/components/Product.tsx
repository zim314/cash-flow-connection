interface Props {
  product: Product;
  index: number;
  deleteProduct: (index: number) => void;
}

interface Product {
  name: string;
  color: string;
  quantity: number;
  price: number;
  imgSrc: string;
}

const Product = ({ product, index, deleteProduct }: Props) => {
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
          <p className="inter_body600">TWD {product.price}.00</p>
          <button
            className="inter_body400 gray_color delectBnt"
            onClick={() => deleteProduct(index)}
          >
            x
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
