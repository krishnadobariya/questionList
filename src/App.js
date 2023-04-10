import "./App.css";
import CustomerSurvey from "./Components/CustomerSurvey";
import Greet from "./Components/Greet";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/greet" element={<Greet/>} />
          <Route path="/question" element={<CustomerSurvey/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
