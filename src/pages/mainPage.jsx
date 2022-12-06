import React from "react";
import Card from "../components/recipesCard";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import RecipeSearchBar from "../components/RecipeSearchBar";
import Header from "../components/Header";

/**
 * This componet is the main page or The home page of the
 * which uses and render all the othe component to App.js
 */
export default function MainPage() {
  return (
    <div className="container">
      <div id="banner">
        <Header />
      </div>
      <div className="Searchbar_container">
        <RecipeSearchBar />
      </div>
      <div id="nest">
        <MDBCol md="35">
          {" "}
          <MDBRow>
            {" "}
            <div className="d-flex align-content-between flex-wrap">
              <Card />{" "}
            </div>{" "}
          </MDBRow>{" "}
        </MDBCol>
      </div>
    </div>
  );
}
