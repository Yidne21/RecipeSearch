import React from "react";
import Card from "../components/recipesCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import SearchBykeyword from "../components/searchBykeyword";
import RecipeSearchBar from "../components/RecipeSearchBar";
import BackAndNextbtn from "../components/backAndnext";

export default function MainPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <br />
          <h1 className="h1">Recipe Search</h1>
          <br />
          <h4 className="h4">Search recipe from all over the world</h4>
          <br />
          <br />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <SearchBykeyword />
        <MDBCol>
          <RecipeSearchBar />
          <div className="d-flex flex-wrap">
            <div className="p-2 flex-fill">
              <Card />
            </div>
            <div className="p-2 flex-fill">
              <Card />
            </div>
          </div>
          <BackAndNextbtn />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
