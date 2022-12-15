import React from 'react'
import { Header } from '@spst-kniznica-project/frontend-libs/shared';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function StudentLoginForm() {
  return (
    <>
      <Header name="Prihlásenie žiak" />
    </>
  )
}

export default StudentLoginForm