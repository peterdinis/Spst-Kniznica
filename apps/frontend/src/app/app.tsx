import { Route, Routes } from "react-router-dom";
import Homepage, { Aboutpage } from "@spst-kniznica-project/frontend-libs/pages"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  );
}

export default App;
