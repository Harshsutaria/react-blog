export const Manufacturer = function ({ sellerInfo, skuCount }) {
  console.log(`INSIDE Manufacturer COMPONENT`, sellerInfo);
  return (
    <div className="seller">
      <h1>{sellerInfo.firstName}</h1>
      <h1> seller sku count is {skuCount}!!!!!!!</h1>
      <h1>{sellerInfo.profileKey}</h1>
    </div>
  );
};
