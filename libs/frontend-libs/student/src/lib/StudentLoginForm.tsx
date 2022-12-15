import React from 'react'
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Student.css";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const notify = () => toast.success("Prihlásenie bolo úspešné");
const errorRegister = () => toast.error("Prihlásenie nebolo úspešné");

function StudentLoginForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [passwordShown, setPasswordShown] = React.useState<Boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <Header name="Prihlásenie žiak" />
      <form
        onSubmit={handleSubmit((data: FormData) => {
          return data;
        })}
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="nameInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="Email"
              required
              autoFocus
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
            />

            <p className="text-red-800">{errors.email && errors.email.message}</p>

          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Heslo
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="*****************"
              autoFocus
              {...register("password", {
                required: true,
              })}
            /><button onClick={togglePassword}>Zobraziť heslo</button>

            <p className="text-red-800">{errors.password && errors.password.message}</p>
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Prihlásenie
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/register"
              >
                Registrácia
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default StudentLoginForm