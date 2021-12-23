/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { get } from "../helpers/service";
import { College } from "../interfaces/college.interface";
import { useHistory } from "react-router-dom";

const SearchEngine: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [collegeList, setCollegeList] = useState<College[]>([]);

  const handleCollegeDetails = (stateData: any) => {
    history.push("/college-details", stateData);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    const college = await get(`/search/${searchText}`);
    if (college.data.length === 0)
      setErrorMessage(
        "Oops! College you are looking for it is not available in our database at the moment."
      );

    setCollegeList(college.data);
  };

  return (
    <>
      <form style={{ maxWidth: "500px" }}>
        <h2>Search college details</h2>
        <div className="input-container">
          <img src="./favicon.png" alt="favicon" className="icon" />
          <input
            className="input-field"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="College title"
            name="usrnm"
          />
        </div>

        <button type="submit" onClick={handleSearch} className="btn">
          Search
        </button>
      </form>
      {errorMessage && <span>{errorMessage}</span>}
      {collegeList.map((clg, index) => (
        <div className="row" key={index}>
          <div className="image" style={{ backgroundColor: "#fff" }}>
            <img src={clg.image} alt={clg.title} />
          </div>
          <div className="content" style={{ backgroundColor: "#ebf0ff" }}>
            <a
              href=""
              onClick={() => handleCollegeDetails(clg)}
              className="link"
            >
              {clg.title}
            </a>
            <p>{clg.short_description}.</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchEngine;
