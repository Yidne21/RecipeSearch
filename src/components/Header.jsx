import React from "react";
import { MDBCol } from "mdb-react-ui-kit";

/** This is the header component
 * for the Ui which renders h1 and h3 html elemets
 */

export default function Header() {
  return (
    <MDBCol>
      <br />
      <h1>Recipe Search</h1>
      <br />
      <h3>Search recipe from all over the world</h3>
      <br />
      <br />
    </MDBCol>
  );
}
