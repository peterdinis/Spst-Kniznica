import React from 'react'
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import {
  useQuery,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
/* TODO: Update !! */
import * as api from "libs/frontend-libs/api/src/lib/queries/bookQueries";
import Button from '@mui/material/Button';
import {IBook, SearchVal} from "libs/frontend-libs/api/src/lib/interfaces/IBook";

export function AllBooks() {
  const { reset } = useQueryErrorResetBoundary();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const valChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { data, isError} = useQuery(["allBooks"], api.getBooks);

  if(isError) {
    console.log("Add something here")
  }

  return (
    <>
      <Header name="Všetky Knihy" />
    </>
  );
}

export default AllBooks;
