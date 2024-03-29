import Link from "next/link";
import useStudent from "@/hooks/useStudent";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";
import TeacherDropdown from "@/components/dropdowns/TeacherDropdown";
import StudentDropdown from "@/components/dropdowns/StudentDropdown";
import AdminDropdown from "@/components/dropdowns/AdminDropdown";

const NavbarLinks: React.FC = () => {
  const { student } = useStudent();
  const { teacher } = useTeacher();
  const { admin } = useAdmin();

  return (
    <>
      <li className="text-black text-xl">
        <Link href="/">Domov</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/books/all">Knihy</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/authors/all">Autori</Link>
      </li>
      <li className="text-black text-xl">
        <Link href="/category/all">Kategórie</Link>
      </li>

      {student === null && teacher === null && admin === null && (
        <>
          <li className="text-black text-xl">
            <Link href="/student/login">Žiak</Link>
          </li>

          <li className="text-black text-xl">
            <Link href="/teacher/login">Učiteľ</Link>
          </li>
        </>
      )}

      {student !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/student/profile">Profil</Link>
          </li>
          <li className="text-black text-xl">
            <StudentDropdown />
          </li>
        </>
      )}

      {teacher !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/teacher/profile">Profil</Link>
          </li>
          <li className="text-black text-xl">
            <TeacherDropdown />
          </li>
        </>
      )}

      {admin !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/admin/profile">Profil</Link>
          </li>
          <li className="text-black text-xl">
            <AdminDropdown />
          </li>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
