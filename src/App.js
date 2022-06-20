import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const name = "harsh rajesh sutaria";
  // const person = { a: "abd", surname: "deviliers" };
  // let like = 50;
  // let c = `trust me you are gonna love this`;
  return (
    // the only thing which we cannot output is boolean and object directly but we can pass obj.property
    /**
     * the only thing we can`t output is boolean and object
     */

    <div className="App">
      <div className="content">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="homePage">
          <Home />
        </div>
        {/* <h1>{name}</h1>
        <h2>!{person.surname}</h2>
        <h3>{5 + 6 + 7 + 8}</h3>
        <h5>{`a developer and tester cant be friends`}</h5>
        <h1>{"welcome to react course !!!!!!!!!!"}</h1>
        <h2>{c}</h2>
        <h2>{String(true)}</h2> */}
      </div>
    </div>
  );
}

// we will always export this function
export default App;
