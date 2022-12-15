import React from 'react';
import { useQuery} from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import * as api from 'libs/frontend-libs/api/src/lib/queries/categoryQueries';
import {SearchCategoryVal, ICategory} from "libs/frontend-libs/api/src/lib/interfaces/ICategory";
import ScrollToTop from "libs/frontend-libs/hooks/src/lib/useScroll";

function DisplayAllCategories() {

  const { data, isError } = useQuery(['categories'], api.getCategories);
  console.log(data);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const valChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isError) {
    console.log('Adding something here');
  }

  return (
    <>
        <div className="flex justify-center align-top">
          <input
            onChange={valChange}
            className="control text-gray-600 mt-4 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Hľadaj kategóriu"
          />
      </div>

        <div className="w-full mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data &&
            data  // eslint-disable-next-line array-callback-return
            .filter((val: SearchCategoryVal) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.description.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((item: ICategory) => {
              return (
                <>
                  <div className="bg-whiterounded py-5 pl-6 flex items-start shadow">
                    <div className="pl-3 pr-10 mt-1">
                      <h3 className="font-normal leading-4 text-red-800 text-2xl">
                      <Link to={`/category/${item.id}`}>
                        {item.name}
                        </Link>
                      </h3>
                      <h3 className="mt-4 leading-4 text-gray-800 text-lg">
                        <Link to={`/category/${item.id}`}>
                        {item.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <ScrollToTop />
    </>
  )
}

export default DisplayAllCategories;
