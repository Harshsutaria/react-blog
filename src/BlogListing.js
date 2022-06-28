import { useState } from "react";
import { ProductListing } from "./ProductListing";
import { Manufacturer } from "./Manufacturer";
import a from "./a";
const BlogListing = () => {
  console.log("inside Blog listing component ");
  console.log(a.level3ProductsList.length);
  let [productList] = useState(a.level3ProductsList);
  productList.sort((a, b) => b.mrp - a.mrp);
  return (
    <div className="blogListing">
      {/* here below there is a map return it will execute it works as a for loop  */}
      <div>
        {/* rendering manufacturer information */}
        <div className="sellerInfo">
          <Manufacturer
            sellerInfo={a.manufacturerDetails}
            skuCount={a.level3ProductsList.length}
          ></Manufacturer>
        </div>
        {/* below is how we pass props(data) into a component  */}
        <ProductListing
          productList={productList}
          title="ProductListing !!!!!!"
          name="cheems"
          surname="cheemba!!!"
        ></ProductListing>
        {/* resuing the component again showing only maximum mrp  */}
        <ProductListing
          productList={[productList.filter((x) => x.isPublished)[0]]}
          title="Most Expensive Sku!!!!"
        ></ProductListing>
      </div>
    </div>
  );
};

export default BlogListing;
