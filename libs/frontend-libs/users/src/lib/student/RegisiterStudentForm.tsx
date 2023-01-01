import React from 'react';
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import '../Users.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterUser } from 'libs/frontend-libs/api/src/lib/interfaces/IUser';
import { useMutation } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/mutations/userMutations';
import { queryClient } from 'libs/frontend-libs/api/src/lib/queryClient';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    lastName: yup.string().required(),
    isTeacher: yup.boolean().required(),
    isStudent: yup.boolean().required(),
  })
  .required();

const notify = () => toast.success('Registrácia bola úspešná');
const errorRegister = () => toast.error('Registrácia nebola úspešná');

function RegisiterStudentForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = React.useState<Boolean>(false);

  const mutation = useMutation(api.registerUser, {
    onSuccess: (data: IRegisterUser) => {
      console.log(data);
      navigate('/student/login');
      notify();
    },

    onError: (data: IRegisterUser) => {
      console.log(data);
      errorRegister();
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header name="Prihlásenie žiak" />
      <form
        onSubmit={handleSubmit((params: IRegisterUser) => {
          queryClient.setQueryData(['studentEmail'], params.email);
          queryClient.setQueriesData(['params'], params);

          mutation.mutate(params);
        })}
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Používateľské meno
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                placeholder="Meno"
                 {...register("username", {
                  required: true,
                  minLength: 5,
                  min: 5
                })}
              />

               <p className="text-red-800">
                {errors.username && errors.username.message}
              </p>
            </div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              autoFocus
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />

             <p className="text-red-800">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Registrácia
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie tu
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisiterStudentForm;
