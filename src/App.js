import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { ContactInfo } from "./ContactInfo";
import Counter from "./Counter";
import BlogListing from "./BlogListing";
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
        <div className="contactPage">
          <ContactInfo />
        </div>
        <div className="counterPage">
          <Counter />
        </div>
        <div className="ProductListing">
          <BlogListing />
        </div>
      </div>
    </div>
  );
}

// we will always export this function
export default App;
