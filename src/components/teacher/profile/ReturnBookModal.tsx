import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as mut from "@/api/mutations/bookingMutations"
import {
  returnBookingType,
  returnBookingSchema,
} from "@/validators/booking/bookingSchema";
import { IReturnBooking } from "@/interfaces/IBooking";
import { errorRegister, notify } from "@/components/shared/toasts/bookingToasts";
import { ApiModal } from "@/components/shared/modals";

const ReturnBookModal: React.FC = () => {
  const { register, handleSubmit } = useForm<returnBookingType>({
    resolver: zodResolver(returnBookingSchema),
  });

  const mutation = useMutation(mut.returnBooking, {
    onSuccess: (data) => {
      notify();
    },

    onError: (data) => {
      errorRegister();
    },
  });

  const onHandleSubmit: SubmitHandler<returnBookingType> = (
    data: IReturnBooking
  ) => {
    mutation.mutate(data);
  };

  return (
    <div className="text-sm ml-10 font-normal text-gray-500 tracking-wide">
      <ApiModal modalButtonText={"Vrátenie knihy"} modalHeaderText={"Vrátiť knihu"} modalCloseText={"Zavrieť"}>
        <form onSubmit={handleSubmit(onHandleSubmit)} className="mt-4">
          <label className="block text-grey-darker text-sm font-bold mb-2">
            Používateľské meno
          </label>
          <input
            type="text"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Používateľské meno"
            {...register("username", {
              required: true,
            })}
          />

          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
            ID Knihy
          </label>
          <input
            type="number"
            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
            {...register("bookId", {
              valueAsNumber: true,
              required: true,
            })}
          />

          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
            Vrátiť knihu
          </button>
        </form>
      </ApiModal>
    </div>
  );
};

export default ReturnBookModal;
