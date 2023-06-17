import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useCopyToClipboard from "@/hooks/useCopy";
import Link from "next/link";
import ReturnModal from "@/components/shared/modals/ReturnModal";
import useAdmin from "@/hooks/useAdmin";
import Options from "../Options";

const ProfileBody: React.FC = () => {
  const logoutToast = () => toast.success("Odhlásenie bolo úspešné");
  const { admin } = useAdmin();
  const [value, copy] = useCopyToClipboard();

  const logoutFromApp = () => {
    logoutToast();
    Cookies.remove("adminAccessToken", {
      path: "/",
    });
    Cookies.remove("adminData", {
      path: "/",
    });
    Cookies.remove("adminPersonalData", {
      path: "/",
    });
    window.location.replace("/admin/login");
  };

  const goToMyBooks = () => {
    setTimeout(() => {
      window.location.replace(`/admin/mybooks/${admin?.data.admin.username}`);
    }, 500);
  };

  return (
    <div className="w-full md:w-9/12 mx-2 h-64">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <PersonIcon />
          <span className="tracking-wide">Základné informácie</span>
        </div>

       <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2  font-semibold">Meno</div>
              <div className="px-4 py-2">{admin?.data.admin.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Priezvisko</div>
              <div className="px-4 py-2">{admin?.data.admin.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Používateľské meno</div>
              <div className="px-4 py-2">
                {admin?.data.admin.username}
                <ContentCopyIcon
                  onClick={() =>
                    copy(admin?.data.admin.username as unknown as string)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2 break-words">
                {admin?.data.admin.email}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Rola</div>
              <div className="px-4 py-2 text-red-700">
                {admin?.data.admin.role}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Moje požičané knihy</div>
              <div className="px-4 py-2">
                <button onClick={goToMyBooks}>
                  Moje knihy
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Odhlásiť sa</div>
              <div className="px-4 py-2">
                <button onClick={logoutFromApp} className="text-red-700">
                  Odlhásenie
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Nastaviť nové heslo</div>
              <div className="px-4 py-2">
                <button>
                  <Link href="/admin/new-password">Nové heslo</Link>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Upraviť profil</div>
              <div className="px-4 py-2">
                <button>
                  <ReturnModal
                    btnName={"Upraviť profil"}
                    modalHeader={"Upraviť profil"}
                  >
                    <form className="mt-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2">
                        Meno
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={admin?.data.admin.name}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Priezivsko
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={admin?.data.admin.lastName}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Používateľské meno
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={admin?.data.admin.username}
                      />
                      <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="temail"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={admin?.data.admin.email}
                      />
                      <button className="ml-8 mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                        Upraviť profil
                      </button>
                    </form>
                  </ReturnModal>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Zmazať profil</div>
              <div className="px-4 py-2">
                <button>
                  <ReturnModal
                    btnName={"Zmazať profil"}
                    modalHeader={"Zmazať profil"}
                  >
                    <form className="mt-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2">
                        Meno
                      </label>
                      <input
                        type="text"
                        className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Používateľské meno"
                        value={admin?.data.admin.name}
                      />

                      <button className="ml-8 mt-6 bg-red-700 rounded-lg p-2 font-extrabold">
                        Zmazať profil
                      </button>
                    </form>
                  </ReturnModal>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <Options />
    </div>
  );
};

export default ProfileBody;
