import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = () => {
 

  return (
    <div>
      <div className="container my-3 w-75">
        <h3>Add Your Note</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Notes></Notes>
      </div>
    </div>
  );
};

export default Home;
