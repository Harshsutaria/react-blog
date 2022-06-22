let Home = () => {
  let homeTitle = `Home Component`;
  // function to handle a click
  const handleClick = () => {
    console.log("muje kya mai to cheemba huh!!!!!!!");
  };

  // function to handle click again

  const handleClickAgain = (name) => {
    console.log("hello ", name);
  };

  return (
    <div>
      <h2>{homeTitle}</h2>
      //creating a button and mapping it to a function
      <button onClick={handleClick}> click me bruh !!!!!!!</button>
      <button onClick={(name) => handleClickAgain("cheembaaaaaaaaa!!!")}>
        click me again brumh!!!!!!!!!!!
      </button>
    </div>
  );
};

export default Home;
