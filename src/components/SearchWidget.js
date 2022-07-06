import React, { useState } from "react";

const SearchWidget = () => {
  const [term, setTerm] = useState("");

  const searchTerm = (term) => {
    setTerm(term.target.value);
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input type="text" value={term} className="input" onChange={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
