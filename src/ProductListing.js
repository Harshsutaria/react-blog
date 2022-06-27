export const ProductListing = function (props) {
  let productList = props.productList;
  console.log("INSIDE ProductListing COMPONENT!!!!", props);

  return (
    // level3 productList will be passed into an array!!!
    <div className="productListing">
      <h1></h1>
      {productList.map((x, k) => (
        <div className="helloProductListing">
          <h1>{k + 1}</h1>
          <h3>{x.productLevel3Title}</h3>
          <h4>{x.mrp}</h4>
          <h5>{x.pricePerUnit}</h5>
          <h6>{x.isPublished}</h6>
        </div>
      ))}
    </div>
  );
};
