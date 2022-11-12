import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

export default function Card(props) {

    return(
        <MDBCard className='h-100'>
          <MDBCardImage
            src={props.image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{props.Title}</MDBCardTitle>
            <MDBCardText>
                {props.description}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <div>
                servings {props.servings}
                <br/>
                <br/>
                <span>{props.Kcal} Kcal</span>
            </div>
            <br/>
            <div>
                PROTIEN  {props.protien}
                <br/>
                FAT  {props.fat}
                <br/>
                CARB  {props.carb}
                <br/>
            </div>
          </MDBCardFooter>
        </MDBCard>
    );
}