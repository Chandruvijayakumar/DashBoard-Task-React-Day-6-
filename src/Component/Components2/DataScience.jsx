import React from "react";
import Root from "../Root";

const DataScience = ({ data }) => {
  const DataScienceData = data.filter((item) => item.field === "dataScience");

  return (
    <div>
      <div className="row">
        {DataScienceData.map((item, index) => {
          return (
            <>
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <Root item={item} index={index} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DataScience;
