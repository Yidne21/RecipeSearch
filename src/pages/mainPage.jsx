import React from "react";
import Card from "../components/recipesCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import SearchBykeyword from "../components/searchBykeyword";
import RecipeSearchBar from "../components/RecipeSearchBar";
import Header from "../components/Header";
export default function MainPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <Header />
      </MDBRow>
      <MDBRow>
        <SearchBykeyword />
        <MDBCol className="SearchandCard__container" md="8">
          <RecipeSearchBar />
          <MDBRow className="card__container">
            <div className="d-flex align-content-between flex-md-row flex-wrap">
              <Card />
            </div>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
