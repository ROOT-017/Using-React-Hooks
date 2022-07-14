import React,{useState} from "react";
import Accordion from "./Accordion";
import SearchWidget from "./SearchWidget";
import Dropdown from "./Dropdown";
const items = [
  { title: "What is react", content: "It is a js framework libary" },
  { title: "Why used react?  ", content: "Cuz it populer among developers" },
  { title: "Do you enjoy using react?", content: "Yeah react is fun" },
];

const options = [
  { label: "This is Red", value: "red" },
  { label: "This is Green", value: "green" },
  { label: "This is Blue", value: "blue" },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <SearchWidget  /> */}
      {<Dropdown selected={selected} onSelectedChange={setSelected} options={options} />}
    </div>
  );
};

export default App;
