import React from "react";
import {
  MDBCol,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function SearchBykeyword() {
  return (
    <MDBCol className="searchBykey__word">
      <h3>Search By keyword</h3>
      <br />
      <MDBDropdown>
        <MDBDropdownToggle className="drop__down">
          Allergies
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Celery-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Egg-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Lupine-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Sesame-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Tree-Nut-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Crustacean-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Fish-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Mustard-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Shelifish-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Wheat-free"
          />
        </MDBDropdownMenu>
      </MDBDropdown>
      <br />
      <MDBDropdown>
        <MDBDropdownToggle className="drop__down"> Diets</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Alcohol-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="High-Protein"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="No-sugar"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Pork-free"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Vegan"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Balanced"
          />
        </MDBDropdownMenu>
      </MDBDropdown>
      <br />
      <MDBDropdown>
        <MDBDropdownToggle className="drop__down">Calories</MDBDropdownToggle>
        <MDBDropdownMenu></MDBDropdownMenu>
      </MDBDropdown>
      <br />
      <MDBDropdown>
        <MDBDropdownToggle className="drop__down">Nutrients</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Default checkbox"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Checked checkbox"
            defaultChecked
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Default checkbox"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Checked checkbox"
            defaultChecked
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Default checkbox"
          />
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckChecked"
            label="Checked checkbox"
            defaultChecked
          />
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBCol>
  );
}