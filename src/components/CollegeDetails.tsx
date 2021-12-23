import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Param {
  clgId?: String;
}

const CollegeDetails: React.FunctionComponent<{}> = (props) => {
  const location = useLocation();

  console.log("Called college location: ", location.state);
  return <Link to="/">Back</Link>;
};

export default CollegeDetails;
