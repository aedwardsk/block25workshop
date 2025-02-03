import { useState } from "react";

// Write your Color component here
const Color = ({ color, selectedColor, setSelectedColor }) => {
  const selected = `${color} ${selectedColor === color ? "selected" : ""}`;
  return <div className={selected} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(" ");
  return (
    <div id='container'>
      <div id='navbar'>
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id='colors-list'>
        <Color color='green' selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color='violet' selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color='orange' selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
