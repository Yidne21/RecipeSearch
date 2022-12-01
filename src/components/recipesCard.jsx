import React from "react";
import {useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBSpinner,
  MDBRipple,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Card() {

  const { recipe, loading} = useSelector((state) => state.data);
  console.log(recipe);

  if (loading) {
    return (
      <MDBSpinner
        style={{ marginTop: "50px", position: "absolute", marginLeft: "20%" }}
        role="status"
      >
        <span className="visually-hidden">loading...</span>
      </MDBSpinner>
    );
  }

  return (
    <>
      {recipe &&
        recipe.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <MDBCol md="6">
                <MDBCard style={{ maxWidth: "540px" }} key={index + 1}>
                  <MDBRow className="g-0">
                    <MDBCol md="4" className="img__serving">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                      >
                        <MDBCardImage
                          src={item.recipe.images.SMALL.url}
                          alt="..."
                          width="100px"
                          height="100px"
                        />
                        <a>
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                      <MDBRow>
                        <div className="card__serving">
                          <strong>Servings {item.recipe.yield}</strong>
                          <br />
                          <br />
                          <span className="calories__span">
                            <strong>{Math.ceil(item.recipe.calories)}</strong>{" "}
                            Kcal
                          </span>
                        </div>
                        <br />
                      </MDBRow>
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBCardBody>
                        <MDBCardTitle>{item.recipe.label}</MDBCardTitle>
                        <MDBCardText>
                          {item.recipe.healthLabels.map((label) => label + " ")}
                        </MDBCardText>
                      </MDBCardBody>
                      <div className="card__nutrient">
                        PROTIEN{" "}
                        <span className="nutrient__span__pro">
                          {Math.ceil(
                            item.recipe.totalNutrients.PROCNT.quantity
                          )}{" "}
                          g
                        </span>
                        <br />
                        FAT{" "}
                        <span className="nutrient__span__fat">
                          {Math.ceil(item.recipe.totalNutrients.FAT.quantity)} g
                        </span>
                        <br />
                        CARB{" "}
                        <span className="nutrient__span__carb">
                          {Math.ceil(
                            item.recipe.totalNutrients.CHOCDF.quantity
                          )}{" "}
                          g
                        </span>
                        <br />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </React.Fragment>
          );
        })}
    </>
  );
}
