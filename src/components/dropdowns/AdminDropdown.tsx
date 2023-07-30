import React, { useState } from "react";
import { Icon } from '@chakra-ui/react';
import { logoutToast } from "@/components/shared/toasts/adminToasts";
import Cookies from "js-cookie";
import {HamburgerIcon} from "@chakra-ui/icons";

const AdminDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="relative z-20">
       <button
        className="flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
       <Icon as={HamburgerIcon} boxSize={6} className="w-6 h-6" /> 
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow z-30">
          <ul className="py-2">
            <dd onClick={logoutFromApp} className="text-lg text-center text-red-700">
              Odlhásenie
            </dd>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDropdown;
