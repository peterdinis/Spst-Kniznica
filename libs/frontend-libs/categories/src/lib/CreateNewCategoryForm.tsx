import { useMutation } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/mutations/categoryMutations';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ICategory } from 'libs/frontend-libs/api/src/lib/interfaces/ICategory';

type FormData = {
  name: string;
  description: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

function CreateNewCategoryForm() {
  const categorySuccess = () =>
    toast.success('Kategória bola úspešné vytvorená');
  const categoryError = () => toast.error('Kategória nebola vytvorená');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation(api.addNewCategory, {
    onSuccess: (data: ICategory) => {
      console.log(data);
    },

    onError: (data: ICategory) => {
      console.log(data);
    },
  });
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Názov kategórie
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Názov kategórie"
            {...register('name', {
              required: true,
              minLength: 5,
              min: 5,
            })}
          />

          <p className="text-red-800">{errors.name && errors.name.message}</p>
        </div>
        <div className="mb-2">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Popis kategórie
          </label>
          <input
            className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="Meno"
            type="text"
            autoFocus
            placeholder="Popis kategórie"
            {...register('description', {
              required: true,
              minLength: 5,
              min: 5,
            })}
          />

          <p className="text-red-800">{errors.description && errors.description.message}</p>
        </div>
        <button className="reg registerButton" type="submit">
          Vytvor
        </button>
      </div>
    </div>
  );
}

export default CreateNewCategoryForm;
