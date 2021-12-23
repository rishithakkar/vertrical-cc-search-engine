import React from "react";
import { Link, useLocation } from "react-router-dom";

const CollegeDetails: React.FunctionComponent<{}> = (props) => {
  const location = useLocation();

  console.log("Called college location: ", location.state);
  const college: any = location.state;
  return (
    <>
      <Link to="/">Back</Link>
      <div className="row-details">
        <img
          src={college.image}
          alt={college.title}
          className="image-details"
        />

        <div className="content">
          <h4>{college.title}</h4>
          <p>{college.short_description}.</p>
          <p>{college.description}.</p>
        </div>
      </div>
    </>
  );
};

export default CollegeDetails;
