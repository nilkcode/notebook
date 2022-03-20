import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import AlertBox from "./components/AlertBox";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <AlertBox msg={"hello Alert"}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
         
        </Router>
      </NoteState>
    </>
  );
}

export default App;
