import { useState } from "react";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Context.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
        <div className=" md:bg-white bg-[#19191D] h-screen w-screen pb-[2px] overflow-x-auto">
          <Body />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
