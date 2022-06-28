import { useState } from "react";
import { ProductListing } from "./ProductListing";
import { useEffect } from "react";

export const GetAll = () => {
  console.log("inside SKU listing component ");

  let [productList, setProductList] = useState(null);

  const handleDelete = (id) => {
    productList = productList.filter((x) => id !== x.productLevel3Id);
    console.log("new sku length is ", productList.length);
    setProductList(productList);
  };

  //   useEffect

  /**
   * mostly we do fetching data in the useEffect as after
   * every refresh we dont want to fetch the data manually
   * that process must be automated
   */
  useEffect(() => {
    fetch("http://localhost:8000/level3ProductsList")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="blogListing">
      {/* here below there is a map return it will execute it works as a for loop  */}
      <div>
        {/* below is how we pass props(data) into a component  */}
        {productList && (
          <ProductListing
            productList={productList}
            title="ProductListing !!!!!!"
            handleDelete={handleDelete}
          ></ProductListing>
        )}
      </div>
    </div>
  );
};

export default GetAll;
