import React from "react";
import { Link } from "react-router-dom";
const Root = ({ item, index }) => {
  return (
      <div className="card h-100 ">
        <img src={item.img} className="card-img" alt="..." />
        <div className="card-body p-4 ">
          {/* <h5 className="card-title">{item.field}</h5> */}
          <h4 className="card-text">{item.title}</h4>

          <p>{item.desc}</p>
          <Link className="read">READ MORE »</Link>
        </div>
        <div class="card-footer d-flex flex-row align-items-center">
          <small class="text-body-secondary">15 February 2024</small>
          <span className="dot"> </span>
          <small class="text-body-secondary"> No Comments</small>
        </div>
      </div>
  );
};

export default Root;
