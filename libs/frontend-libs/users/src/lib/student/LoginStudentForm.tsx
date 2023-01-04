import React from 'react';
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import '../Users.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginUser, ITokenUser } from 'libs/frontend-libs/api/src/lib/interfaces/IUser';
import { useMutation } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/mutations/userMutations';
import { queryClient } from 'libs/frontend-libs/api/src/lib/queryClient';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const notify = () => toast.success('Prihlásenie bolo úspešné');
const errorLogin = () => toast.error('Prihlásenie bolo neúspešné');

function LoginStudentForm() {
  const [passwordShown, setPasswordShown] = React.useState<Boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const mutation = useMutation(api.loginUser, {
    onSuccess: (data: ITokenUser) => {
      queryClient.setQueryData(["userToken"], data.token);
      localStorage.setItem("userUsername", data.username);
      navigate('/student/profile');
      notify();
    },

    onError: () => {
      errorLogin();
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header name="Prihlásenie žiak" />
      <form
        onSubmit={handleSubmit((params: ILoginUser) => {
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
                Meno
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
              id="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder="******************"
              autoFocus
              {...register('password', {
                required: true,
                minLength: 5,
                min: 5,
              })}
            />
            <p className="text-red-800">
              {errors.password && errors.password.message}
            </p>
            <button onClick={togglePassword}>Zobraziť heslo</button>
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
                Registrácia tu
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginStudentForm;
