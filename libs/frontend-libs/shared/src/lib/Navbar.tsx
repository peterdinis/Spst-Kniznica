import { Fragment } from 'react';
import './Navbar.css';
import { Menu, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import {logoutUser} from "libs/frontend-libs/api/src/lib/mutations/userMutations";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const userUsername = localStorage.getItem('userUsername');
  const loggedOut = () => toast.success("Odlhásenie bolo úspešné");

  const logoutFn = () =>{
    logoutUser();
    navigate("/");
    loggedOut();
  }

  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <a href="/" className="font-semibold text-xl tracking-tight">
          SPŠT Knižnica
        </a>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li className="border-t md:border-none">
          <a
            href="/"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Domov
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/about"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            O Stránke
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/books"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Všetky Knihy
          </a>
        </li>
        <li className="border-t md:border-none">
          <a
            href="/categories"
            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
          >
            Všetky Kategórie
          </a>
        </li>
        {userUsername === null || userUsername === undefined? (
          <>
            <li className="border-t md:border-none">
              <a
                href="/student/login"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Prihlásenie žiak
              </a>
            </li>

            <li className="border-t md:border-none">
              <a
                href="/teacher/login"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Prihlásenie učiteľ
              </a>
            </li>
          </>
        ) : (
          <>
           <li className="border-t md:border-none">
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                <Menu as="div">
                  <Menu.Button>
                    <a href="/student/profile">Profil</a>
                  </Menu.Button>

                  <Menu.Button>
                    <a href="/borrowed">Moje požičané knihy</a>
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <form method="POST" action="/">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={logoutFn}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Odhlásenie
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
