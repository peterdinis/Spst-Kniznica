import { Route, Routes } from 'react-router-dom';
import {
  Homepage,
  Aboutpage,
  DisplayAllBooks,
  DisplayAllCategories,
  GetOneBook,
  GetOneCategory,
  CreateNewBook,
  CreateNewCategory,
  ChatPage,
  StudentLogin,
  StudentRegister,
  TeacherLogin,
  StudentProfile,
  TeacherProfile,
  TeacherRegister,
} from '@spst-kniznica-project/frontend-libs/pages';
import Navbar from 'libs/frontend-libs/shared/src/lib/Navbar';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/books" element={<DisplayAllBooks />} />
        <Route path="/book/:id" element={<GetOneBook />} />
        <Route path="/book/create" element={<CreateNewBook />} />
        <Route path="/categories" element={<DisplayAllCategories />} />
        <Route path="/category/:id" element={<GetOneCategory />} />
        <Route path="/category/create" element={<CreateNewCategory />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/register" element={<TeacherRegister />} />
        <Route path="/teacher/profile" element={<TeacherProfile />} />
      </Routes>
    </>
  );
}

export default App;
