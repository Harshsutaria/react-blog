import { ProductListing } from "./ProductListing";
import useFetch from "./useFetch";

export const GetAll = () => {
  console.log("inside SKU listing component ");
  const { isPending, data, error } = useFetch(
    "http://localhost:8000/level3ProductsList"
  );

  console.log(
    "getting the data from use effect hook is",
    isPending,
    data.length,
    error
  );

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
        {data && (
          <ProductListing
            productList={data}
            title="ProductListing !!!!!!"
            // handleDelete={}
          ></ProductListing>
        )}
      </div>
    </div>
  );
};

export default GetAll;
