import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/errors/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useCopyToClipboard from "@/hooks/useCopy";
import { CopyIcon } from "@chakra-ui/icons";
import Image from "next/image";
import defaultImage from "../../images/noImage.png";
import { getBookInfoError } from "../../constants/errorMessages";
import useAdmin from "@/hooks/useAdmin";
import useTeacher from "@/hooks/useTeacher";
import { ApiModal } from "../shared/modals";
import BookingModal from "./BookingModal";
import { useForm } from "react-hook-form";
import {
  allFieldsBooksError,
  deleteBookSuccess,
  updateBookError,
  updateBookSuccess,
} from "../shared/toasts/bookToasts";
import * as mut from "@/api/mutations/bookMutations";
import { Input, Text } from "@chakra-ui/react";
import { IUpdateBook } from "@/interfaces/IBook";
import useStudent from "@/hooks/useStudent";

const BookInfo: React.FC = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <FallbackLoader />;
  }

  const { data, isError, isLoading } = useQuery(
    ["bookDetail", query.id as unknown as number],
    () =>
      api.getOneBook(
        Number(query.id as unknown as number) as unknown as string
      ),
    {
      retry: 2,
      placeholderData: placeholderBook,
    }
  );

  if (isError) {
    return <FallbackRender error={getBookInfoError} />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }
  const [value, copy] = useCopyToClipboard();
  const router = useRouter();

  const { register, handleSubmit, setError, reset } = useForm();

  const deleteBookSubmit = async (id: number) => {
    try {
      await mut.deleteBook(id);
      deleteBookSuccess();
      reset();
      window.location.replace("/books/all");
    } catch (error) {
      setError("id", {
        type: "manual",
        message: "An error occurred while deleting the book.",
      });
    }
  };

  const updateBookSubmit = async (id: number, newData: IUpdateBook) => {
    try {
      await mut.updateBook(id, newData);
      updateBookSuccess();
      window.location.replace("/books/all");
    } catch (error) {
      updateBookError();
    }
  };

  const navigateToBooks = () => {
    router.push("/books/all");
  };

  const { admin } = useAdmin();
  const { teacher } = useTeacher();
  const { student } = useStudent();

  return (
    <>
      <Header name="Detail Knihy" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {(data.book && data.book.image === null) ||
            (data.book && data.book.image === undefined) ||
            (data.book && data.book.image === "string") ? (
              <Image
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={defaultImage}
                height={300}
                width={300}
                priority={true}
              />
            ) : (
              <LazyLoadImage
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={data.book && data.book.image}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Názov</span>:{" "}
                  {data.book && data.book.name}
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">
                  <ApiModal
                    modalButtonText={"Prečítaj si informácie o knihe"}
                    modalHeaderText={"Krátke info o knihe"}
                    modalCloseText={"Zavrieť"}
                  >
                    <span className="break-words">
                      {data.book && data.book.description}
                    </span>
                  </ApiModal>
                </span>
              </p>
              {admin?.data.admin.name ||
                teacher?.data.user.name ||
                (student?.data.user.name && (
                  <>
                    <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                      <span className="font-bold">Id knihy pre požičanie</span>:{" "}
                      <CopyIcon
                        className="transform scale-10"
                        onClick={() => copy(data.book.id)}
                      />{" "}
                      {data.book && data.book.id}
                    </p>
                  </>
                ))}
              {!data.author ? (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-red-800">
                    <span className="font-bold">Autor / ka neexistuje</span>:{" "}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Autor / ka</span>:{" "}
                    {data.author && data.author.fullName}
                  </p>
                </>
              )}
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Rok</span>:{" "}
                {data.book && data.book.year}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Počet Strán</span>:{" "}
                {data.book && data.book.pages}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Počet Kusov</span>:{" "}
                {data.book && data.book.quantity}
              </p>

              {!data.category ? (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-red-800">
                    <span className="font-bold">Kategória neexistuje</span>:{" "}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Kategória</span>:{" "}
                    {data.category && data.category.name}
                  </p>
                </>
              )}

              {data.book && data.book.status !== "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-red-800">Nedostupná</span>
                    <br />
                  </p>
                </div>
              )}

              <hr className="mt-6" />
              {data.book && data.book.status === "Dostupná" && (
                <>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-green-800">
                      {data.book && data.book.status}
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="font-bold text-red-800">
                      Knihu je možné si požičať len vtedy ak je dostupná a
                      zároveň je prihlásení žiak alebo učiteľ alebo admin
                    </span>
                  </p>
                  {teacher === null && student === null && admin === null ? (
                    <></>
                  ) : (
                    <BookingModal />
                  )}
                </>
              )}
              <button
                onClick={navigateToBooks}
                className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
              >
                Návrat na knihy
              </button>
              <br />
              {(teacher || admin) && (
                <>
                  <button className="float-right">
                    <ApiModal
                      modalButtonText={"Uprav knihu"}
                      modalHeaderText={"Uprav knihu"}
                      modalCloseText={"Zatvor"}
                    >
                      <form
                        onSubmit={handleSubmit(async (formData) => {
                          const updatedData = {
                            name: formData.name,
                            description: formData.description,
                            year: formData.year,
                            pages: formData.pages,
                            publisher: formData.publisher,
                            image: formData.image,
                            status: formData.status,
                          };

                          if (
                            updatedData.name === "" ||
                            updatedData.description === "" ||
                            Number.isNaN(updatedData.year) ||
                            Number.isNaN(updatedData.pages) ||
                            updatedData.publisher === "" ||
                            updatedData.image === "" ||
                            updatedData.status === ""
                          ) {
                            allFieldsBooksError();
                          }

                          await updateBookSubmit(
                            Number(formData.id),
                            updatedData
                          );
                        })}
                      >
                        <Input
                          {...register("id")}
                          type="hidden"
                          value={data.id}
                        />
                        <Input
                          {...register("authorName")}
                          type="hidden"
                          value={data.author && data.author.fullName}
                        />
                        <Input
                          {...register("categoryName")}
                          type="hidden"
                          value={data.category && data.category.name}
                        />
                        <Input
                          {...register("name")}
                          placeholder="Meno knihy"
                          mb={10}
                        />{" "}
                        <Input
                          {...register("description")}
                          placeholder="Meno autora / ky"
                          mb={10}
                        />{" "}
                        <Input
                          type="number"
                          {...register("year", { valueAsNumber: true })}
                          placeholder="Rok vydania"
                          mb={10}
                        />
                        <Input
                          type="number"
                          {...register("pages", { valueAsNumber: true })}
                          placeholder="Počet strán"
                          mb={10}
                        />
                        <Input
                          {...register("publisher")}
                          placeholder="Vydavateľstvo"
                          mb={10}
                        />{" "}
                        <Input
                          {...register("image")}
                          placeholder="Obrázok"
                          mb={10}
                        />{" "}
                        <Input
                          {...register("status")}
                          placeholder="Status knihy"
                          mb={10}
                        />{" "}
                        <button
                          type="submit"
                          className="bg-red-800 text-white rounded-lg p-2 mt-5"
                        >
                          Uprav knihu
                        </button>
                        <Text mt={5} color="red.400" fontWeight={"bold"}>
                          Názov kategórie a meno spisovateľa / ky sa neupravuje
                        </Text>
                        <Text mt={5} color="red.400" fontWeight={"bold"}>
                          Nemusia byť vyplnené všetky údaje
                        </Text>
                      </form>
                    </ApiModal>
                  </button>
                  <button className="mr-4 float-right">
                    <ApiModal
                      modalButtonText={"Zmazať knihu"}
                      modalHeaderText={"Zmazať knihu"}
                      modalCloseText={"Zatvor"}
                    >
                      <form
                        onSubmit={handleSubmit((formData) =>
                          deleteBookSubmit(formData.id)
                        )}
                      >
                        <Input
                          {...register("id", {
                            valueAsNumber: true,
                            required: "Book ID is required",
                          })}
                          placeholder="Id Knihy"
                        />
                        <button
                          type="submit"
                          className="bg-red-800 text-white rounded-lg p-2 mt-5"
                        >
                          Zmaž knihu
                        </button>
                      </form>
                    </ApiModal>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
