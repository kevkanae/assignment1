import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
