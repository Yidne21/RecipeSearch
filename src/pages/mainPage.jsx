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
        <MDBCol>
          <RecipeSearchBar/>
          <MDBRow>
            <MDBCol>
              <div className="d-flex flex-wrap">
                <div className="p-2 ">
                  <Card />
                </div>
                <br/>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
