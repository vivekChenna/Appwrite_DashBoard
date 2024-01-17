import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-white h-screen w-screen pb-[2px] overflow-x-auto">
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
