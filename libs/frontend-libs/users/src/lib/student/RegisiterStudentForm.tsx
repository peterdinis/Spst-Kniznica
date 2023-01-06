import React from 'react';
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import '../Users.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegisterUser, ITokenUser } from 'libs/frontend-libs/api/src/lib/interfaces/IUser';
import { useMutation } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/mutations/userMutations';
import { queryClient } from 'libs/frontend-libs/api/src/lib/queryClient';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    role: yup.string().required(),
    externalId: yup.number().required()
  })
  .required();

const notify = () => toast.success('Registrácia bola úspešná');
const errorRegister = () => toast.error('Registrácia nebola úspešná');

function RegisiterStudentForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = React.useState<Boolean>(false);

  const mutation = useMutation(api.registerUser, {
    onSuccess: (data: ITokenUser) => {
      queryClient.setQueryData(["userToken"], data.token);
      localStorage.setItem("userUsername", data.user.username);
      localStorage.setItem("userId", data.user.id! as unknown as string)
      navigate('/student/login');
      notify();
    },

    onError: () => {
      errorRegister();
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header name="Registrácia žiak" />
      <form
        onSubmit={handleSubmit((params: IRegisterUser) => {
          queryClient.setQueryData(['userUsername'], params.username);
          queryClient.setQueriesData(['params'], params);
          mutation.mutate(params);
        })}
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-2">
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
                {...register('username', {
                  required: true,
                  minLength: 5,
                  min: 5,
                })}
              />

              <p className="text-red-800">
                {errors.username && errors.username.message}
              </p>
            </div>
            <div className="mb-2">
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
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />

              <p className="text-red-800">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Heslo
              </label>
              <input
                className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                autoFocus
                type={passwordShown ? 'text' : 'password'}
                placeholder="*********************************"
                {...register('password', {
                  required: true,
                })}
              />

              <p className="text-red-800">
                {errors.password && errors.password.message}
              </p>
              <button onClick={togglePassword}>Zobraziť heslo</button>
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Krstné meno
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              autoFocus
              placeholder="Meno"
              {...register('firstname', {
                required: true,
                minLength: 5,
                min: 5,
              })}
            />

            <p className="text-red-800">
              {errors.firstname && errors.firstname.message}
            </p>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Priezvisko
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              autoFocus
              placeholder="Priezvisko"
              {...register('lastname', {
                required: true,
                minLength: 5,
                min: 5,
              })}
            />

            <p className="text-red-800">
              {errors.lastname && errors.lastname.message}
            </p>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Rola
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              autoFocus
              placeholder="Žiak"
              {...register('role', {
                required: true,
                minLength: 5,
                min: 5,
                value: "Žiak"
              })}
            />

            <p className="text-red-800">
              {errors.role && errors.role.message}
            </p>
          </div>

          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Študentské id
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Meno"
              type="text"
              autoFocus
              
              placeholder="Vaše id"
              {...register('externalId', {
                required: true,
                minLength: 5,
                min: 5,
              })}
            />

            <p className="text-red-800">
              {errors.externalId && errors.externalId.message}
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
