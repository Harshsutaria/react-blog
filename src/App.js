import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { ContactInfo } from "./ContactInfo";
import Counter from "./Counter";
import BlogListing from "./BlogListing";
import { GetAll } from "./GetAll";
import { DecrementCounter } from "./DecrementCounter";
// importing routing module
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/navbar">
              <div className="navbar">
                <Navbar></Navbar>
              </div>
            </Route>
            <Route path="/home">
              <div className="homePage">
                <Home />
              </div>
            </Route>
            <Route path="/contact">
              <div className="contactPage">
                <ContactInfo />
              </div>
            </Route>

            <Route path="/counter">
              <div className="counterPage">
                <Counter />
              </div>
            </Route>
            {/* <div className="ProductListing">
          <BlogListing />
        </div> */}
            <Route path="/listing">
              <div className="ProductListing">
                <GetAll />
              </div>
            </Route>
            <Route path="/decrement">
              <div className="decrementCounter">
                <DecrementCounter />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// we will always export this function
export default App;
