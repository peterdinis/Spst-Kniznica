import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import * as mut from "../../api/mutations/adminMutations";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAdminRegisterType, createAdminSchema } from "@/validators/admin/adminSchema";
import { IRegister } from "@/interfaces/IAdmin";
import { notify, errorRegister } from "../shared/toasts/loginToasts";
import { IErrorMessage } from "@/interfaces/IError";
import { applicationErrorToast, emailAlreadyExistsToast } from "../shared/toasts/applicationToasts";
import { Header } from "../shared";
import { IStudentInfo } from "@/interfaces/IStudent";
import { Text } from "@chakra-ui/react";

const RegisterForm: React.FC = () => {

  const router = useRouter();

  const mutation = useMutation(mut.register, {
    onError: (error: IErrorMessage) => {
      if (error.response?.status === 409) {
        applicationErrorToast();
      } else if (error.response?.data?.message === "Email already exists") {
        emailAlreadyExistsToast();
      } else {
        errorRegister();
      }
    },
    onSuccess: (data: IStudentInfo) => {
      Cookies.set("studentAdminData", JSON.stringify(data));
      router.push("/admin/login");
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    register,
  } = useForm<createAdminRegisterType>({
    resolver: zodResolver(createAdminSchema)
  });
  
  const onHandleSubmit: SubmitHandler<createAdminRegisterType> = (data: IRegister) => {
    try {
      mutation.mutate(data);
      notify();
      router.push("/admin/login");
    } catch (err: any) {
      if (err.response?.data?.message === "Email already exists") {
        emailAlreadyExistsToast();
      } else {
        errorRegister();
      }
      router.push("/failed");
      errorRegister();
      return;
    }
  };

  return (
    <>
      <Header name="Registrácia Admin" />
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="name"
              >
                Meno
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                autoComplete="Meno"
                placeholder="Meno"
                {...register("name", {
                  required: true,
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />

              <p className="text-red-800">
                {errors.name && errors.name.message}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Priezivsko
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Priezivsko"
                type="text"
                autoFocus
                autoComplete="priezivsko"
                placeholder="Priezivsko"
                {...register("lastName", {
                  required: true,
                })}
                onKeyUp={() => {
                  trigger("lastName");
                }}
              />

              <p className="text-red-800">
                {errors.lastName && errors.lastName.message}
              </p>
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Používateľské meno
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="email"
                type="text"
                autoFocus
                placeholder="Používateľské meno"
                {...register("username", {
                  required: "Používateľské meno je povinné",
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />

              {errors.username && errors.username.type === "required" && (
                <p className="text-red-800">Používateľské meno je povinné</p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="email"
                type="email"
                autoFocus
                placeholder="Email"
                {...register("email", {
                  required: "Email je povinný",
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
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
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
                disabled={isSubmitting}
              >
                Registrácia
              </button>
              <div>
                <Link
                  className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                  href="/admin/login"
                >
                  Prihlásenie
                </Link>
              </div>
            </div>
            <Text mt={6} color="red.800" fontWeight={"bold"}>
              Všetky veci pri registrácií musia byť vyplnené
            </Text>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
