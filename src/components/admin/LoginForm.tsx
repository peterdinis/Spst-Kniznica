import Header from "../shared/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import * as mut from "../../api/mutations/adminMutations";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import {
  createAdminRegisterType,
  loginAdminSchema,
} from "@/validators/admin/adminSchema";
import { ILogin, ILoginAdminInfo } from "@/interfaces/IAdmin";
import { notify, errorRegister } from "../shared/toasts/loginToasts";
import { IErrorMessage } from "@/interfaces/IError";
import { userDoesNotExists, passwordErrors } from "../shared/toasts/applicationToasts";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors},
    trigger,
    register,
  } = useForm<createAdminRegisterType>({
    resolver: zodResolver(loginAdminSchema),
  });

  const mutation = useMutation(mut.login, {
    onSuccess: (data: ILoginAdminInfo) => {
      Cookies.set("adminData", JSON.stringify(data));
      Cookies.set("adminPersonalData", JSON.stringify(data.data.admin));
      Cookies.set("adminAccessToken", JSON.stringify(data.data.token));
      Cookies.remove("studentData");
      Cookies.remove("teacherData");
      notify();
      window.location.replace("/admin/profile");
    },

    onError: (error: IErrorMessage) => {
      if (error.response?.status === 400) {
        userDoesNotExists();
      } else if (error.response?.data?.message === "User does not exist") {
        userDoesNotExists();
      } else if (error.response?.data?.message === "Password does not match.") {
        passwordErrors();
      } else {
        errorRegister();
      }
      router.push("/failed");
      errorRegister();
      return;
},
  });

  const onHandleSubmit: SubmitHandler<createAdminRegisterType> = (
    data: ILogin
  ) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Header name="Prihlásenie Admin" />
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Email
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Email"
                type="text"
                autoFocus
                placeholder="Email"
                {...register("email", {
                  required: "Email je povinný",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Emailová adresa nie je správna",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />

              {errors.email && errors.email.type === "required" && (
                <p className="text-red-800">Email je povinný</p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Heslo
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Heslo"
                type="password"
                autoFocus
                autoComplete="current-password"
                placeholder="********************************************"
                {...register("password", {
                  required: "Zadajte heslo",
                  minLength: {
                    value: 8,
                    message: "Heslo musí mať viac znakov ako je 8",
                  },
                  maxLength: {
                    value: 20,
                    message: "Heslo môže mať najviac 20 znakov",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />

              <p className="text-red-800">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div>
              <button
                className="mt-4 bg-red-700 rounded-lg p-2 text-white"
                type="submit"
              >
                Prihlásenie
              </button>
              <div>
                <Link
                  className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                  href="/admin/register"
                >
                  Registrácia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
