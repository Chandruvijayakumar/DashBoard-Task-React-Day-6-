import React from "react";
import Root from "../Root";

const CyberSecurity = ({ data }) => {
  const CyberSecurityData = data.filter(
    (item) => item.field === "cybersecurity"
  );
  return (
    <div>
      <div className="row">
        {CyberSecurityData.map((item, index) => {
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

export default CyberSecurity;
