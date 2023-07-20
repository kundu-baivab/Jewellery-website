import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment from "moment";
import Alert from 'react-bootstrap/Alert';

const Home = () => {
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
      console.log("User Deleted")
      setShow(true)
    }
  };

  useEffect(() => {
    getUserData();
  }, [dltUser]);

  return (
    <>
      {
          show?
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                  Product Deleted!!!
              </Alert>:""
            
      }
      <div className="container mt-2">
        <h1 className="text-center my-4 head">PRODUCT-UPLOAD</h1>
        <div className='text-center'>
            <Button variant="dark"><NavLink to="/register" className="text-decoration-none  text-light">Add Product</NavLink></Button>
        </div>
        <div className="row d-flex mt-5 mx-4 align-items-center">
          {data.length > 0
            ? data.map((el) => {
                return (
                  <>
                    <Card
                      style={{ width: "24rem", height: "38rem" }}
                      className="mb-3 mx-3"
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "350px",
                          height: "300px",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        className="mt-3"
                        src={`./uploads/${el.imgpath}`}
                      />
                      <Card.Body className="text-center">
                        <Card.Title>Product Name : {el.pname}</Card.Title>
                        <Card.Text>Product Description: {el.pdes}</Card.Text>
                        <Card.Text>
                          Date Added: {moment(el.date).format("L")}
                        </Card.Text>
                        <Button
                          variant="danger"
                          className="col-lg-6 text-center "
                          onClick={() => dltUser(el._id)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
