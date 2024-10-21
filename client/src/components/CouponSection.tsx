import React from "react";

const CouponSection = () => {
  return (
    <section>
      <div className="input_button_container">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="input_coupon"
        />
        <button className="inter_body400">Apply Coupon</button>
      </div>
      <div className="info_contairner">
        <div>
          <div className="info_group_container inter_body500 gray_color">
            <p>Sub total</p>
            <p>$2597.00</p>
          </div>

          <div className="info_group_container inter_body500 gray_color">
            <p>Tax</p>
            <p>$623.28</p>
          </div>

          <div className="info_group_container inter_body600">
            <p>Total</p>
            <p>$3220.28</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
