export const ProductListing = function ({ productList, title }) {
  console.log("INSIDE ProductListing COMPONENT!!!!");

  return (
    // level3 productList will be passed into an array!!!
    <div className="productListing">
      <h1>{title}</h1>
      {productList.map((x, k) => (
        <div className="helloProductListing">
          <h1>{k + 1}</h1>
          <h3>{x.productLevel3Title}</h3>
          <h4>{x.mrp}</h4>
          <h5>{x.pricePerUnit}</h5>
          <h6>{x.isPublished}</h6>

          {/* always function call is done via anonamous function else it will execute it again and again  */}
          {/* <button onClick={() => handleDelete(x.productLevel3Id)}>
            delete me please!!!!!!
          </button> */}
        </div>
      ))}
    </div>
  );
};
