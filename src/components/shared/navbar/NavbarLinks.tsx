import Link from "next/link";
import useStudent from "@/hooks/useStudent";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";

const NavbarLinks: React.FC = () => {
  const { student } = useStudent();
  const { teacher } = useTeacher();
  const { admin } = useAdmin();
 /*  const { colorMode, toggleColorMode } = useColorMode() */

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

    {/* TODO: Fix me later */}
    {/*   <li className="text-black text-xl" onClick={toggleColorMode}>
        <Text>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Text>
      </li>
 */}
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
        </>
      )}

      {teacher !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/teacher/profile">Profil</Link>
          </li>
        </>
      )}

      {admin !== null && (
        <>
          <li className="text-black text-xl">
            <Link href="/admin/profile">Profil</Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
