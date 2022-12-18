import {
  FallbackRender,
  Header,
  Missing,
} from '@spst-kniznica-project/frontend-libs/shared';
import * as api from 'libs/frontend-libs/api/src/lib/queries/bookQueries';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useQuery } from '@tanstack/react-query';
import { placeholderBook } from 'libs/frontend-libs/data/src/lib/placeholderBook';
import { BorrowModal } from '@spst-kniznica-project/frontend-libs/booking';

function GetOneBookDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useQuery(
    ['bookDetail', id],
    () => api.getOneBook(id as string),
    {
      placeholderData: placeholderBook,
    }
  );

  const navigateBack = () => {
    navigate('/books');
  };

  if (isError) {
    return (
      <>
        <Missing name="Chyba na strane applikácie. Opakujte operáciu neskôr" />
      </>
    );
  }
  return (
    <>
      <Header name="Detail knihy" />
      {data === undefined || null ? (
        <FallbackRender error="Nastala chyba" />
      ) : (
        <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {data.image === null ||
              data.image === undefined ||
              !data.image ||
              data.image === 'string' ? (
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
                {data.title === null ? (
                  <div className="mt-2">
                    <Missing name="title chýba" />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                      <span className="font-bold">Názov</span>: {data.name}
                    </h1>
                  </div>
                )}
                {data.description === null ? (
                  <div>
                    <Missing name="Popis chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Krátke info</span>:{' '}
                    {data.description}
                  </p>
                )}

                {data.author === null ? (
                  <div>
                    <Missing name="Author chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold">Author</span>: {data.author}
                  </p>
                )}
                {data.year === null || data.year === '' ? (
                  <div>
                    <Missing name="Rok vydania chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold"> Rok</span>: {data.year}
                  </p>
                )}
                {data.pages === null ? (
                  <div>
                    <Missing name="Počet strán chýba" />
                  </div>
                ) : (
                  <p className="text-2xl mt-3 font-light leading-relaxed  mb-4 text-gray-800">
                    <span className="font-bold"> Počet strán</span>:{' '}
                    {data.pages}
                  </p>
                )}
                <BorrowModal headerName="Poižčaj knihu" buttonName="Požičať">
                  <div className="mt-4">
                    <input
                      className="py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
                      placeholder="Book ID"
                    />
                    <br />
                    <input
                      className="mt-4 py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      className="mt-4 py-3 px-4 w-full rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
                      placeholder="Days"
                    />
                    <br />
                    <button className="mt-4 bg-blue-300 rounded p-2 text-blue-50 font-semibold">
                      Požičať
                    </button>
                  </div>
                </BorrowModal>

                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5" />
                <button className="mt-10 text-xl" onClick={navigateBack}>
                  Späť na knihy
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GetOneBookDisplay;
