import {
  Header,
  FallbackRender,
  Missing,
} from '@spst-kniznica-project/frontend-libs/shared';
import * as api from 'libs/frontend-libs/api/src/lib/queries/categoryQueries';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { placeholderCategory } from 'libs/frontend-libs/data/src/lib/placeholderCategory';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { Button } from '@mui/material';

function FindOneCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useQuery(
    ['bookDetail', id],
    () => api.getOneCategory(id as string),
    {
      placeholderData: placeholderCategory,
    }
  );

  const navigateBack = () => {
    navigate('/categories');
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
      <Header name="Detail Kategórie" />
      <Button onClick={navigateBack}>Späť na kategórie</Button>
      {data === undefined || null ? (
        <FallbackRender error="Nastala chyba" />
      ) : (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Meno kategórie</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Popis kategórie
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.description}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Knihy ktoré majú túto kategóriu
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.books} || <span>RANDOM BOOK 1</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
}

export default FindOneCategory;
