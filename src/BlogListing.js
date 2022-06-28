import { useState } from "react";
import { ProductListing } from "./ProductListing";
import { Manufacturer } from "./Manufacturer";
import { CounterDecrement } from "./Counter-Decrement";
import a from "./a";

const BlogListing = () => {
  console.log("inside Blog listing component ");
  console.log(a.level3ProductsList.length);

  let [productList, setProductList] = useState(a.level3ProductsList);
  // implementing passing function as a prop
  let [count, setCount] = useState(0);
  console.log("count is ", count);
  // productList.sort((a, b) => b.mrp - a.mrp);
  // implementing delete a product function
  const handleDelete = (id) => {
    productList = productList.filter((x) => id !== x.productLevel3Id);
    console.log("new sku length is ", productList.length);
    setProductList(productList);
  };

  // implementing counter decrement
  const DecrementCounter = (count) => {
    console.log(`INSIDE DECREMENT COUNT PARENT FUNCTION !!!!!!`);
    setCount(count - 100);
  };

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
          handleDelete={handleDelete}
        ></ProductListing>
        {/* resuing the component again showing only maximum mrp  */}
        {/* <ProductListing
          productList={[productList.filter((x) => x.isPublished)[0]]}
          title="Most Expensive Sku!!!!"
        ></ProductListing> */}

        {/* implementing passing function as a prop */}
        <CounterDecrement
          count={count}
          DecrementCounter={DecrementCounter}
        ></CounterDecrement>
      </div>
    </div>
  );
};

export default BlogListing;
