import Header from "../shared/Header";
import * as api from "../../api/queries/bookQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderBook } from "@/data/placeholderBook";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAuth } from "@/context/AuthProvider";
import HelperModal from "../shared/HelperModal";

const BookInfo: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  const { data, isError, isLoading } = useQuery(
    ["bookDetail", Number(id)],
    () => api.getOneBook(Number(id) as any),
    {
      retry: 2,
      placeholderData: placeholderBook,
    }
  );

  if (isError) {
    return <FallbackRender error="Something went wrong" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToBooks = () => {
    router.push("/books/all");
  };

  return (
    <>
      <Header name="Detail Knihy" />
      <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {data.image === null ||
            data.image === undefined ||
            !data.image ||
            data.image === "string" ? (
              <LazyLoadImage
                alt="No Image"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              />
            ) : (
              <LazyLoadImage
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border drop-shadow-md"
                src={data.image}
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div>
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                  <span className="font-bold">Názov</span>: {data.name}
                </h1>
              </div>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Krátke info</span>:{" "}
                {data.description}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Author</span>: {data.author}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Rok</span>: {data.year}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold"> Počet Strán</span>: {data.pages}
              </p>
              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Počet Kusov</span>: {data.quantity}
              </p>

              <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                <span className="font-bold">Číslo kategórie</span>:{" "}
                {data.categoryId}
              </p>

              {data.status !== "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-red-800">Nedostupná</span>
                    <br />
                  </p>
                </div>
              )}

              <hr className="mt-6" />
              {data.status === "Dostupná" && (
                <div>
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4">
                    <span className="font-bold"> Kniha je:</span>{" "}
                    <span className="text-green-800">{data.status}</span>
                    <br />
                    {user?.email === null || user?.email === undefined ? (
                      <span>
                        <div className="text-xl font-bold mt-4 text-red-800">
                          Ak si chcete požičať knihu musíte byť prihlásení
                        </div>
                      </span>
                    ) : (
                      <HelperModal
                        btnName={"Požičať si knihu"}
                        modalHeader={"Požičanie knihy"}
                      >
                        <form className="mt-4">
                          <label className="block text-grey-darker text-sm font-bold mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Email"
                          />

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Meno knihy
                          </label>
                          <input
                            type="text"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Meno knihy"
                          />

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Od
                          </label>
                          <input
                            type="date"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                          />

                          <label className="mt-4 block text-grey-darker text-sm font-bold mb-2">
                            Do
                          </label>
                          <input
                            type="date"
                            className="outline-none mt-2 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500"
                          />

                          <button className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold">
                            Požičať
                          </button>
                        </form>
                      </HelperModal>
                    )}
                  </p>
                </div>
              )}
              <button
                onClick={navigateToBooks}
                className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
              >
                Návrat na knihy
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
