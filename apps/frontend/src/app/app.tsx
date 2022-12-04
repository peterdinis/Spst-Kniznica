import { Route, Routes } from "react-router-dom";
import Homepage from "@spst-kniznica-project/frontend-libs/pages"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
