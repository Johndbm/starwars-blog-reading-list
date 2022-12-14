import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "../component/Card.jsx";

export const Home = () => (
  <div className="container">
    <div className=" mt-5 text-danger">
      <h1>Characters</h1>
      <Card />
      <h1>Planets</h1>
      <Card />
    </div>
  </div>
);
