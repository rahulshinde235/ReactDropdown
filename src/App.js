import "./App.css";
import { useState } from "react";
function App() {
  const [showOptions, setshowOptions] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);
  const handleMouseEnter = () => {
    setshowOptions(true);
  };
  const handleMouseLeave = (e) => {
    setshowOptions(false);
    setselectedOption(e.target.value);
  };
  const arr = ["HTML", "CSS", "React", "JavaScript"];

  return (
    <div className="App">
      {selectedOption && <p>Selected dropdown option is : {selectedOption}</p>}
      <h2>Should you use a drop down</h2>
      <div className="button-wrapper">
        <button onMouseEnter={handleMouseEnter}>Show options</button>
        <img
          src="./caret-down.png"
          height="10px"
          width="10px"
          id="caret"
          alt="caret icon"
        />
      </div>

      {showOptions &&
        arr.map((item) => {
          return (
            <option value={item} onClick={handleMouseLeave}>
              {item}
            </option>
          );
        })}
    </div>
  );
}

export default App;
