import React, { useState } from "react";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { loadRecipeStart } from "../redux/action";

/**
 * This component Renders The reecipe
 * search bar with it's Search button
 */

const initialState = {
  query: "",
};

export default function RecipeSearchBar() {
  const [inputValue, setInputValue] = useState(initialState);
  const { query } = inputValue;
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      console.log(query);
      dispatch(loadRecipeStart(query));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div>
      <MDBInputGroup className="mb-3" noBorder>
        <input
          id="Search_input"
          type="text"
          placeholder="Enter Recipe to search"
          className="recipe__input"
          name="query"
          value={query || ""}
          onChange={onInputChange}
        />
        <MDBBtn onClick={handleSearch}>Search</MDBBtn>
      </MDBInputGroup>
    </div>
  );
}
