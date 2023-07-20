import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [pname, setPName] = useState("");
  const [pdes, setPDes] = useState("");
  const [file, setFile] = useState("");
  const history = useNavigate();

  const setData1 = (e) => {
    const { value } = e.target;
    setPName(value);
  };

  const setData2 = (e) => {
    const { value } = e.target;
    setPDes(value);
  };

  const setimg = (e) => {
    setFile(e.target.files[0]);
  };

  //adduser data

  const addUserData = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("pname", pname);
    formData.append("pdes", pdes);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(`/register`, formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("Error!!");
    } else {
      history("/owner");
    }
  };

  return (
    <>
      <div className="container my-5" >
        <br /><br />
        <h1>Upload Products:</h1>

        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="pname"
              onChange={setData1}
              placeholder="Enter product name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="pdes"
              onChange={setData2}
              placeholder="Enter product description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              onChange={setimg}
              placeholder="Upload only .jpeg or .png files"
            />
          </Form.Group>
          <Button className="mb-5" variant="success" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
