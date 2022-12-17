import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  console.log(store.planets);

  return (
    <div className="container">
        <div className="mt-5 text-danger">
              <h1>Characters</h1>          
          <div className="row row-cols-3 ">
            {store.characters.map((people) => (
            <Card key={people._id} item={people} nature={"characters"}/>
            ))}
          </div>
              <h1>Planets</h1>
          <div className="row row-cols-3 ">
            {store.planets.map( (planet) => (
            <Card key={planet._id} item={planet} nature={"planets"}/>
            ))}
          </div>
        </div>
      </div>
  );
};
