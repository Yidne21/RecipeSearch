import React from "react";
import {
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function RecipeSearchBar() {
    return (
      <div>
        <MDBInputGroup className="mb-3" noBorder>
          <input
            type="text"
            placeholder="Enter Recipe to search"
            className="recipe__input"
          />
          <MDBBtn>Search</MDBBtn>
        </MDBInputGroup>
      </div>
    );
}