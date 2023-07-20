import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getProductData = async (id) => {
    const res = await axios.get(`/gallery/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("Error!!");
    } else {
      setData(res.data.product);
    }
  };

  useEffect(() => {
    getProductData(id);
  }, [id]);

  const props = {
    width: "534",
    height: "400",
    zoomWidth: 600,
    img: `../uploads/${data.imgpath}`,
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center store">Product Details</h1>
      <hr className="horizontal container" />
      <div className="row">
        <div className="col-6 my-4">{<ReactImageZoom {...props} />}</div>
        <div className="col-6 zoom mt-0"><h5>MAGNIFIED VIEW</h5></div>
      </div>
      <div className="col-12 mt-3 text-center">
        <hr className="horizontal" />
        <h3> {data.pname}</h3>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p>Description: {data.pdes}</p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
