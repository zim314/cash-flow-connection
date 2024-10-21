const PaymentPage = () => {
  return (
    <form action="https://ccore.spgateway.com/MPG/mpg_gateway" method="post">
      <input type="text" name="MerchantID" value="MS13095118" />
      <input type="text" name="TradeSha" value="" />
      <input type="text" name="TradeInfo" value="" />
      <input type="text" name="TimeStamp" value="1656384620" />
      <input type="text" name="Version" value="1.5" />
      <input type="text" name="MerchantOrderNo" value="1656384620" />
      <input type="text" name="Amt" value="60" />
      <input type="email" name="Email" value="agito723@gmail.com" />
      <button type="submit">送出</button>
    </form>
  );
};

export default PaymentPage;
