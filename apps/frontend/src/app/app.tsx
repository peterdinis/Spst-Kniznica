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
  NotAllowed,
  StudentBorrowedBooks,
  TeacherBorrowedBooks,
  AdminLoginPage,
  AdminProfilePage,
  AdminRegisterPage,
  AdminUpdatePage,
} from '@spst-kniznica-project/frontend-libs/pages';
import { Suspense } from 'react';
import {
  FallbackLoader,
  Navbar,
} from '@spst-kniznica-project/frontend-libs/shared';
import {
  UpdateProfile,
  UpdateTeacherProfile,
} from '@spst-kniznica-project/frontend-libs/users';
import StudentPrivateRoute from 'libs/frontend-libs/routes/src/lib/StudentPrivateRoute';
import TeacherPrivateRoute from 'libs/frontend-libs/routes/src/lib/TeacherPrivateRoute';
import AdminPrivateRoute from 'libs/frontend-libs/routes/src/lib/AdminPrivateRoute';

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
          <Route path="/categories" element={<DisplayAllCategories />} />
          <Route path="/category/:id" element={<GetOneCategory />} />
          <Route path="/student/register" element={<StudentRegisterPage />} />
          <Route path="/student/login" element={<StudentLoginPage />} />
          <Route element={<StudentPrivateRoute />}>
            <Route path="/student/profile" element={<StudentProfilePage />} />
            <Route path="/student/profile/update" element={<UpdateProfile />} />
            <Route
              path="/student/borrowed"
              element={<StudentBorrowedBooks />}
            />
          </Route>
          <Route path="/teacher/register" element={<TeacherProfilePage />} />
          <Route path="/teacher/login" element={<TeacherLoginPage />} />
          <Route element={<TeacherPrivateRoute />}>
            <Route path="/book/create" element={<CreateNewBook />} />
            <Route path="/category/create" element={<CreateNewCategory />} />
            <Route path="/teacher/profile" element={<TeacherProfilePage />} />
            <Route
              path="/teacher/profile/update"
              element={<UpdateTeacherProfile />}
            />
            <Route
              path="/teacher/borrowed"
              element={<TeacherBorrowedBooks />}
            />
          </Route>
          <Route path="/admin/register" element={<AdminRegisterPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route element={<AdminPrivateRoute />}>
            <Route path="/admin/profile" element={<AdminProfilePage />} />
            <Route path="/admin/update" element={<AdminUpdatePage />} />
          </Route>
          <Route path="/notallowed" element={<NotAllowed />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
