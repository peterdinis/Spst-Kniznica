import Checkbox from "@mui/material/Checkbox";
import "./Books.scss";
import Typography from "@mui/material/Typography";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "libs/frontend-libs/api/src/lib/queries/bookQueries";
import * as apiCat from "libs/frontend-libs/api/src/lib/queries/categoryQueries"
import AvaiableCategories from "./AvaiableCategories";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";

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
}

const schema = yup.object()

function CreateNewBookForm() {
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
  )
}

export default CreateNewBookForm