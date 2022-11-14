import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function BackAndNextbtn() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBBtn>Back</MDBBtn>{" "}
        </MDBCol>
        <MDBCol></MDBCol>
        <MDBCol>
          <MDBBtn>Next</MDBBtn>{" "}
        </MDBCol>
      </MDBRow>
    );
}