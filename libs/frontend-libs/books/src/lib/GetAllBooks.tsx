import React from 'react';
import {
  FallbackRender,
  Header,
} from '@spst-kniznica-project/frontend-libs/shared';
import { useQuery, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import * as api from 'libs/frontend-libs/api/src/lib/queries/bookQueries';
import Button from '@mui/material/Button';
import { IBook } from 'libs/frontend-libs/api/src/lib/interfaces/IBook';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollToTop from 'libs/frontend-libs/hooks/src/lib/useScroll';

export function AllBooks() {
  const { reset } = useQueryErrorResetBoundary();
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const valChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { data, isError } = useQuery(['allBooks'], api.getBooks);

  if (isError) {
    console.log('Add something here');
  }

  return (
    <>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <FallbackRender error="Chyba pri načítavaní knih " />
            <Button onClick={() => resetErrorBoundary()}>Skúsiť znova</Button>
          </div>
        )}
      >
        <Header name="Všetky knihy" />
        <div className="flex justify-center align-top">
          <input
            onChange={valChange}
            className="text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj knihu"
          />
        </div>
        <div className="grid gap-8 space-x-1 lg:grid-cols-6">
          <>
            {data &&
              data.map((item: IBook) => {
                return (
                  <>
                    <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                      <div className="mb-8">
                        {item.image === '' ||
                        item.image === null ||
                        item.image === undefined ||
                        item.image === 'string' ? (
                          <LazyLoadImage
                            alt="Placeholder"
                            className="h-auto w-full"
                            src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                          />
                        ) : (
                          <LazyLoadImage
                            alt="Placeholder"
                            className="h-auto w-full"
                            src={item.image}
                          />
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl text-gray-800">
                          {item.name} - {item.author}
                        </h3>
                        <div className="text-center mt-4">
                          <Link
                            className="link mt-10 bg-blue-200 p-2 rounded"
                            to={`/book/${item.id}`}
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </>
        </div>
        <ScrollToTop />
      </ErrorBoundary>
    </>
  );
}

export default AllBooks;
