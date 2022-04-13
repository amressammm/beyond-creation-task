import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/showPage.css";
const axios = require("axios");

const ShowPage = (route) => {
  const { state } = useLocation();

  const [price, setPrice] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    handlePrice();
  }, []);

  const handlePrice = async () => {
    let res = await axios.get(
      `https://obscure-woodland-00834.herokuapp.com/api/products/${state.selectedProduct}`
    );

    setPrice(res.data.data.attributes.Price);
    setName(res.data.data.attributes.Name);
  };

  return (
    <div className="backGround">
      <div className="root">
        <h1 className="price">
          {name}: {price} EGP
        </h1>
      </div>
    </div>
  );
};

export default ShowPage;
