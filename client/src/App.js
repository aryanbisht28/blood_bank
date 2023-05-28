import "./App.css";
import FindBlood from "./pages/find_blood/index";
import Donor from "./pages/donors/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/index";
// import Signin from "./pages/login";
// import SignupNew from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<SignupNew />} /> */}
        <Route path="/" element={<FindBlood />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/refer" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
