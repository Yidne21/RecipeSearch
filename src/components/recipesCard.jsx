import React from "react";
import { useSelector } from "react-redux";
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

/**
 * This componet render The recipe
 * card item to the main page flex box container
 * @returns The recipe cards
 */
export default function Card() {
  const { recipe, loading } = useSelector((state) => state.data);

  if (loading) {
    return (
      <MDBSpinner
        style={{ marginTop: "50px", position: "absolute" }}
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
              <MDBCol md="6" className="card__container">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCard
                    style={{ maxWidth: "700px" }}
                    key={index + 1}
                    className="card"
                  >
                    <MDBRow className="g-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="hover-overlay"
                      ></MDBRipple>
                      <MDBCol md="3" className="img__serving">
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
                            {item.recipe.healthLabels.map(
                              (label) => label + " "
                            )}
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
                            {Math.ceil(item.recipe.totalNutrients.FAT.quantity)}{" "}
                            g
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
                          <br />
                          <a
                            className="see__more"
                            href={item.recipe.url}
                            target="_blank"
                            rel="Noreferrer"
                          >
                            More
                          </a>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBRipple>
              </MDBCol>
            </React.Fragment>
          );
        })}
    </>
  );
}
