import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetProduct = () => {
  console.log(`INSIDE GetProduct COMPONENT`);

  const { id } = useParams();

  let [skuList, setSkuList] = useState([]);

  console.log("id is ", id);

  let title = `INSIDE PRODUCT FULL VIEW ${id}`;
  let url = `http://localhost:8000/level3ProductsList`;
  let a;
  useEffect(() => {
    console.log("INSIDE USE EFFECT HOOK FROM FULL VIEW");
    a = fetch(url)
      .then((data) => {
        console.log("data os ", data);
        return data.json();
      })
      .then((z) => {
        z = z.filter((x) => x.productLevel3Id !== id);
        console.log("z us ", z);
        setSkuList(z);
      });
  }, []);

  console.log("sku filter is ", skuList);
  return (
    <div className="getProduct">
      <h1>{title}</h1>
      {skuList.map((x) => (
        <div>
          <h1>{x.productLevel3Id}</h1>
          <h2>{x.productLevel3Title}</h2>
          <h2>{x.mrp}</h2>
        </div>
      ))}
    </div>
  );
};

export { GetProduct };
