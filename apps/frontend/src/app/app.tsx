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
  NotFoundPage,
  TeacherProfilePage,
  TeacherLoginPage,
  StudentRegisterPage,
  StudentLoginPage,
  StudentProfilePage,
  MyBorrowedBooks,
} from '@spst-kniznica-project/frontend-libs/pages';
import { Suspense } from 'react';
import {
  FallbackLoader,
  Navbar,
} from '@spst-kniznica-project/frontend-libs/shared';
import { UpdateProfile, UpdateTeacherProfile } from '@spst-kniznica-project/frontend-libs/users';
import StudentPrivateRoute from "libs/frontend-libs/routes/src/lib/StudentPrivateRoute";

export function App() {
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
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
          <Route path="/teacher/register" element={<TeacherProfilePage />} />
          <Route path="/teacher/login" element={<TeacherLoginPage />} />
          <Route path="/teacher/profile" element={<TeacherProfilePage />} />
          <Route path="/student/register" element={<StudentRegisterPage />} />
          <Route path="/student/login" element={<StudentLoginPage />} />
          <Route element={<StudentPrivateRoute />}>
          <Route path="/student/profile" element={<StudentProfilePage />} />
          <Route path="/student/profile/update" element={<UpdateProfile />} />
          </Route>
          <Route path="/teacher/profile/update" element={<UpdateTeacherProfile />} />
          <Route path="/borrowed" element={<MyBorrowedBooks/> } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
