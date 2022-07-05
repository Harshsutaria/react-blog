import { useState } from "react";

export const Create = () => {
  console.log("INSIDE CREATE PRODUCT-LISTING!! ");
  let title = `Please create products!!!`;

  let [id, setId] = useState("123");
  let [name, setName] = useState("");
  let [mrp, setMrp] = useState("");
  let [sp, setSp] = useState("");

  const handleSubmit = (e) => {
    // in-order to prevent the page from refereshing we do preventDefault
    e.preventDefault();
    let product = { id, name, mrp, sp };
    console.log("product is ", product);

    // adding a blog via post request

    fetch("http://localhost:8000/level3ProductsList", {
      method: "POST",
      headers: { "Content-Type": "application:json" },
      body: JSON.stringify(product),
    }).then((data) => {
      console.log("new product added ");
    });
  };

  return (
    <div className="createProducts">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label>product title!!!:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>product mrp!!!:</label>
        <input
          type="text"
          required
          value={mrp}
          onChange={(e) => setMrp(e.target.value)}
        ></input>
        <label>product priceperunit!!!:</label>
        <input
          type="text"
          required
          value={sp}
          onChange={(e) => setSp(e.target.value)}
        ></input>
        <label>product description!!!:</label>
        <input type="text" required></input>

        <button>add product</button>
      </form>
      <p>{name}</p>
      <p>{mrp}</p>
      <p>{sp}</p>
    </div>
  );
};
