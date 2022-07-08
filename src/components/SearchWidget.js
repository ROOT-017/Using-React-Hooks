import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchWidget = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500); 
    return () => {
      clearTimeout(timeId);
    };
  }, [term]);

  const searchTerm = (event) => {
    setTerm(event.target.value);
  };

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            value={term}
            className="input"
            onChange={searchTerm}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default SearchWidget;
