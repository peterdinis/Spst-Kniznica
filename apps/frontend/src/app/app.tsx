import Homepage from "libs/frontend-libs/pages/src/lib/Homepage";
import Navbar from "libs/frontend-libs/shared/src/lib/Navbar";
import { Routes, Route } from "react-router-dom";
import Aboutpage from "libs/frontend-libs/pages/src/lib/Aboutpage";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  );
}

export default App;
