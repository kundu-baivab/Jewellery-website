import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Display = () => {
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
    <>
      <div className="container my-4">
        <hr />
        <div className="row d-flex mt-5 mx-4 align-items-center">
          {data.length > 0
            ? data.map((el, i) => {
                return (
                  <>
                      <Card.Img
                        variant="top"
                        style={{
                          width: "380px",
                          height: "300px",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        className="img--1 my-3 py-2"
                        src={`./uploads/${el.imgpath}`}
                      />
                  </>
                );
              })
            : ""}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Display;
