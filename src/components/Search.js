import React from "react";
import {Search} from "react-bootstrap-icons";
import "../styles/Search.css";
// import SearchContext from "../utils/SearchContext";

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="form-row justify-content-md-center">
      <div className="form-group col-md-4 ">
        <input
          onChange={props.handleInputChange}
          value={props.artist}
          name="artist"
          type="text"
          className="form-control"
          placeholder="Enter Artist Name"
          id="artist"
        />
        </div>
        <div className="form-group col-md-4 ">
          <input
          onChange={props.handleInputChange}
          value={props.title}
          name="title"
          type="text"
          className="form-control"
          placeholder="Enter Song Title"
          id="title"
          />
        </div>
        
        <div className="col-md-2">
          <button type="submit" className="btn border-0 text-white search">
          <Search/> Search
        </button>
      </div>
      </div>
    </form>
  );
}

export default SearchForm;