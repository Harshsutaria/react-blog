import { useState } from "react";
import a from "./a";
const BlogListing = () => {
  console.log("inside Blog listing component ");
  console.log(a.level3ProductsList.length);
  let [productList, setProductList] = useState(a.level3ProductsList);
  return (
    // {`mrp is ${x.mrp} and selling price is {x.pricePerUnit}
    <div className="blogListing">
      {/* here below there is a map return it will execute it works as a for loop  */}
      {productList.map((x, i) => (
        <div>
          <h1>{i + 1}</h1>
          <h1>{x.productLevel3Title}</h1>
          <h1>{x.productLevel3Id}</h1>
          <h2>{`mrp is ${x.mrp} and selling price is ${x.pricePerUnit}`}</h2>
          <h3>{x.isPublished.toString()}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogListing;
