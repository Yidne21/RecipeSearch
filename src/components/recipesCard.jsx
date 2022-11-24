import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBSpinner,
  MDBInputGroup,
  MDBBtn,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";
import { loadRecipeStart } from '../redux/action';

export default function Card() {

  const dispatch = useDispatch();

  const {recipe, loading } = useSelector((state) => state.data);
  console.log(recipe);

  // const { r:[...data] } = recipe[0];
  // console.log(data)
    useEffect(() => {
      dispatch(loadRecipeStart());
    }, []);


  if(loading){
    return (
      <MDBSpinner style={{marginTop: "70px", marginRight: "400px"}} role="status">
        <span className='visually-hidden'>loading...</span>
      </MDBSpinner>
    );
  }

  
    return (
      <div>
        {recipe &&
          recipe.map((item, index) => (
            <MDBCard className="h-100" key={index + 1}>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={item.recipe.images.REGULAR.url}
                  alt="..."
                  width="400px"
                  height="400px"
                  position='top'
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle position="top-right">
                  {item.recipe.label}
                </MDBCardTitle>
                <MDBCardText>{item.recipe.ingredientLines}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <div>
                  servings {item.recipe.yield}
                  <br />
                  <br />
                  <span>{item.recipe.calories} Kcal</span>
                </div>
                <br />
                <div>
                  PROTIEN {item.recipe.totalNutrients.PROCNT.quantity}g
                  <br />
                  FAT {item.recipe.totalNutrients.FAT.quantity}g
                  <br />
                  CARB {item.recipe.totalNutrients.CHOCDF.quantity}g
                  <br />
                </div>
              </MDBCardFooter>
            </MDBCard>
          ))}
      </div>
    );
}