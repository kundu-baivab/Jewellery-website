import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

const OurStore = () => {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const getUserData = async () => {
    const res = await axios.get("/getdata?sort=dateAdded&order=-1", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("Error!!");
    } else {
      setData(res.data.getUser);
    }
  };

  const dltUser = async (id) => {
    const res = await axios.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("Error!!");
    } else {
      console.log("User Deleted");
      setShow(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, [dltUser]);

  return (
    <div>
      <h3 className="text-center mt-4 font-weight-bold store"> Our Store </h3>
      <hr className="horizontal container" />
      <div className="container" id="contain">
        <div class="row">
          <div className="row d-flex mt-5 ml-4 align-items-center">
            {data.length > 0
              ? data.map((el, i) => {
                  return (
                    <>
                      <Card
                        className="mb-3 mx-5 card--store my-2 mt-0 p-3 mb-5 bg-white rounded img--1"
                        style={{ width: "19.5rem", height: "22rem" }}
                      >
                        <Card.Img
                          variant="top"
                          // style={{
                          //   width: "350px",
                          //   height: "300px",
                          //   margin: "auto",
                          // }}
                          className="mt-2 card-img-top"
                          src={`./uploads/${el.imgpath}`}
                        />
                        <Card.Body className="text-center">
                          <Card.Title className="card-title text-center font-weight-bold mb-3">
                            {el.pname}
                          </Card.Title>
                          {/* <Card.Text>Product Description: {el.pdes}</Card.Text> */}
                          <a href={`/gallery/${el._id}`}>
                            <button className="expb col-lg-6 text-center">
                              Explore
                            </button>
                          </a>
                        </Card.Body>
                      </Card>
                    </>
                  );
                })
              : ""}
          </div>
          {/* <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_1
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_2
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_3
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div class="row mx-5">
          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_1
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_2
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_3
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mx-5">
          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_1
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_2
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card--store svg-shadow shadow-danger shadow-intensity-lg my-3 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img
                src="https://i.ibb.co/k5DqY2g/MANUSHREE-2-JPEG.jpg"
                class="card-img-top"
                alt=" "
              />
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">
                  Payal_3
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div> */}
          {/* </div>
          </div>
        </div> */}
        </div>
      </div>
      <br />
    </div>
  );
};

export default OurStore;
