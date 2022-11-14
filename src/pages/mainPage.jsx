import React from "react";
import Card from "../components/recipesCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import SearchBykeyword from "../components/searchBykeyword";
import RecipeSearchBar from "../components/RecipeSearchBar";
export default function MainPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <br />
          <h1 >Recipe Search</h1>
          <br />
          <h3 >Search recipe from all over the world</h3>
          <br />
          <br />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <SearchBykeyword />
        <MDBCol>
          <RecipeSearchBar />
          <MDBRow>
            <MDBCol>
              <div className="d-flex flex-wrap">
                <div className="p-2 flex-fill">
                  <Card />
                </div>
                <div className="p-2 flex-fill">
                  <Card />
                </div>
                <div className="p-2 flex-fill">
                  <Card />
                </div>
                
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
