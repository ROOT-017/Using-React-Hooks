import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [active, setActive] = useState(false);

  const renderedOption = options.map((option) => {
    if (option.value == selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div
          className={`ui selection dropdown  ${active ? "visible active" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <div className="text">{selected.label}</div>
          <i className="dropdown icon"></i>
          <div className={`menu  ${active ? "visible transition" : ""}`}>
            {renderedOption}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
