import { Route, Routes } from "react-router-dom";
import {Homepage, Aboutpage, DisplayAllBooks, DisplayAllCategories, GetOneBook, GetOneCategory, CreateNewBook, CreateNewCategory } from "@spst-kniznica-project/frontend-libs/pages"
import Navbar from "libs/frontend-libs/shared/src/lib/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/books" element={<DisplayAllBooks />} />
        <Route path="/book/:id" element={<GetOneBook />} />
        <Route path="/book/create" element={<CreateNewBook />} />
        <Route path="/categories" element={<DisplayAllCategories />} />
        <Route path="/category/:id" element={<GetOneCategory />} />
        <Route path="/category/create" element={<CreateNewCategory />} />
      </Routes>
    </>
  );
}

export default App;
