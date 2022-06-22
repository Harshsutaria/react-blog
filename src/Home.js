import { useState } from "react"; //importing useState hook
let Home = () => {
  let homeTitle = `Home Component`;

  let [name, setName] = useState("mario");
  let [age, setAge] = useState("18");
  // function to handle a click
  const handleClick = () => {
    console.log("muje kya mai to cheemba huh tuhuh!!!!!!!");
  };

  // function to handle click again

  const handleClickAgain = (name, age) => {
    // console.log("hello ", name, age);
    setName(name);
    setAge(age);
  };
  /**
   * to immplement reactive valuse we will use useEffect hook
   */
  return (
    <div>
      <h2>{homeTitle}</h2>
      <h1>
        {name} is {age} years old !!!!!
      </h1>
      <button onClick={handleClick}> click me bruh !!!!!!!</button>
      <button
        onClick={(name, age) => handleClickAgain("cheembaaaaaaaaa!!!", 12)}
      >
        click me again brumh!!!!!!!!!!!
      </button>
    </div>
  );
};

export default Home;
