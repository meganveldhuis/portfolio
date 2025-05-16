import "./styles/_globals.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/resume" element={<ResumePage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
