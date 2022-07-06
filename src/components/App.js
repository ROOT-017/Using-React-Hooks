import React from "react";
import Accordion from "./Accordion";
import SearchWidget from "./SearchWidget";
const items = [
  { title: "What is react", content: "It is a js framework libary" },
  { title: "Why used react?  ", content: "Cuz it populer among developers" },
  { title: "Do you enjoy using react?", content: "Yeah react is fun" },
];
const App = () => { 
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <SearchWidget  />
    </div>
  );
};

export default App;
