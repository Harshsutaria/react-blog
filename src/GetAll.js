import { useState } from "react";
import { ProductListing } from "./ProductListing";
import { useEffect } from "react";

export const GetAll = () => {
  console.log("inside SKU listing component ");

  // state variable for productListing
  let [productList, setProductList] = useState(null);

  // state variable for isPending
  let [isPending, setPending] = useState(true);
  let [error, setError] = useState();

  //delete a sku method
  const handleDelete = (id) => {
    productList = productList.filter((x) => id !== x.productLevel3Id);
    console.log("new sku length is ", productList.length);
    setProductList(productList);
  };

  //   useEffect

  /**
   * mostly we do fetching data in the useEffect as after
   * every refresh we don't want to fetch the data manually
   * that process must be automated
   */
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/level3ProductsList")
        .then((res) => {
          if (!res.ok) throw new Error("Some thing went wrong !!!");
          return res.json();
        })
        .then((data) => {
          // @ts-ignore
          setProductList(data);
          setPending(false);
        })
        .catch((error) => {
          setError(error);
          setPending(false);
          console.log("error aagaya bahi !!!!!!!!!!!", error);
        });
    }, 2000);
  }, []);

  return (
    <div className="blogListing">
      {/* here below there is a map return it will execute it works as a for loop  */}
      <div>
        {/* below is the conditional rendering means if the data is 
        present than only productList component will be rendered  */}
        <h1>
          {error}
          {isPending ? "LOADING!!!!!!!!!!!" : "FETCHED RECORDS SUCCESSFULLY!!"}
        </h1>
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
