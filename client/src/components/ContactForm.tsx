import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div>
      <h3 className="inter_body600">Contact Information</h3>
      <form className="form_container">
        <label htmlFor="name" className="inter_body600_small gray_color">
          First & Last name
        </label>
        <input
          id="name"
          type="text"
          placeholder="First & Last name"
          defaultValue={"王小明"}
        />

        <label htmlFor="email" className="inter_body600_small gray_color">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          defaultValue={"qwe123@gmail.com"}
        />

        <div className="section_donw_info">
          <div className="section_donw_info_section_container">
            <div className="section_donw_info_section">
              <label
                htmlFor="miSelect"
                className="inter_body600_small gray_color"
              >
                Country
              </label>
              <select id="miSelect" className="inter_body600_small">
                <option value="Finland">台灣</option>
                <option value="EEUU">EEUU</option>
                <option value="España">España</option>
                <option value="Cuba">Cuba</option>
              </select>
            </div>
            <div className="section_donw_info_section">
              <label
                htmlFor="postal"
                className="inter_body600_small gray_color"
              >
                Postal Code
              </label>
              <input
                id="postal"
                type="text"
                placeholder="00270"
                defaultValue={"100"}
              />
            </div>
          </div>
        </div>
        <Link to="/payment">
          <button type="submit">Continue</button>
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
