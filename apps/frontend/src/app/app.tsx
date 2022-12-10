import { Route, Routes } from "react-router-dom";
import {Homepage, Aboutpage } from "@spst-kniznica-project/frontend-libs/pages"
import Navbar from "libs/frontend-libs/shared/src/lib/Navbar"

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
