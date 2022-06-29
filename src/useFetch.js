import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  console.log("inside useFetch custom Hook !!! with ", url);

  // state variable for productListing
  let [data, setData] = useState(null);

  // state variable for isPending
  let [isPending, setPending] = useState(true);
  let [error, setError] = useState(null);

  //   useEffect

  /**
   * mostly we do fetching data in the useEffect as after
   * every refresh we don't want to fetch the data manually
   * that process must be automated
   */
  useEffect(
    (url) => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) throw new Error("Some thing went wrong !!!");
            console.log("fetching data in progress");
            return res.json();
          })
          .then((data) => {
            console.log("inside .then 1", data.length);
            setData(data);
            setPending(false);
            setError(null);
          })
          .catch((error) => {
            setError(error);
            setPending(false);
            console.log("error aagaya bahi !!!!!!!!!!!", error);
          });
      }, 2000);
    },
    [url]
  );

  console.log("returning from use fetch custom hooks as ", {
    isPending,
    data,
    error,
  });

  return { isPending, data, error };
};

export default useFetch;
