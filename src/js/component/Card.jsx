import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
    <div className="card">
        <img
          src="https://via.placeholder.com/300"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-outline-primary">
            Learn more!
          </Link>
          <Link to="#" className="btn btn-outline-warning">
            💛
          </Link>
        </div>
      </div>
);