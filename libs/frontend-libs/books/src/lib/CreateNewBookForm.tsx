import Checkbox from '@mui/material/Checkbox';
import './Book.css';
import Typography from '@mui/material/Typography';
import { useQuery, useMutation } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/mutations/bookMutations';
import * as apiCat from 'libs/frontend-libs/api/src/lib/queries/categoryQueries';
import AvaiableCategories from './AvaiableCategories';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { IBook } from 'libs/frontend-libs/api/src/lib/interfaces/IBook';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  description: string;
  author: string;
  year: number;
  avaiable: boolean;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryId: number;
};

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    author: yup.string().required(),
    year: yup.number().required(),
    avaiable: yup.boolean().required(),
    pages: yup.number().required(),
    publisher: yup.string().required(),
    image: yup.string().required(),
    status: yup.string().required(),
    categoryId: yup.number().required(),
  })
  .required();

const bookSuccess = () => toast.success('Kniha bola vytvorená');
const bookError = () => toast.error('Kniha nebola vytvorená');

function CreateNewBookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IBook>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const { data } = useQuery(['categories'], apiCat.getCategories);

  const mutation = useMutation(api.addNewBook, {
    onSuccess: (data: IBook) => {
      console.log(data);
      bookSuccess();
    },

    onError: (data: IBook) => {
      console.log(data);
      bookError();
    },
  });

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
       <AvaiableCategories
          modalHeader="Zoznam dostupných kategórií"
          buttonName="Zoznam dostupných kategórií"
        />
      <form>
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

            <p className="text-red-800">
              {errors.description && errors.description.message}
            </p>
          </div>
          <button className="reg registerButton" type="submit">
            Vytvor
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewBookForm;
