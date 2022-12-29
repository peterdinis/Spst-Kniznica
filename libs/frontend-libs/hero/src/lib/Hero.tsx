import { DisplayOneQoute } from '@spst-kniznica-project/frontend-libs/quotes';
import DateTimePicker from 'libs/frontend-libs/shared/src/lib/DateTimePicker';
import { useQuery } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/queries/exampleQuery';
import { queryClient } from '@spst-kniznica-project/frontend-libs/api';
import { toast } from 'react-toastify';

function Hero() {
  const { data, isError } = useQuery(['exampleData'], api.getTestData);
 
  queryClient.setQueryData(['exampleData'], data);

  const issue = () => toast.error('Na backende je chyba');

  if (isError) {
    issue();
  }

  return (
    <>
      <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
          <img
            className="mx-auto"
            src="https://w7.pngwing.com/pngs/1002/691/png-transparent-green-b-trimble-technical-high-school-technical-school-national-secondary-school-technology-sci-tech-information-banner-high-school-teacher.png"
            alt="people smiling"
          />
        </div>
        <div role="contentinfo" className="w-full lg:w-1/2 h-full">
          <h1 className="ml-8 text-indigo-700 text-4xl lg:text-6xl font-black mb-8">
            Školská Knižnica
          </h1>
          <DateTimePicker />
          <div className="ml-8 text-gray-800 text-xl font-regular mb-8 mt-6">
            Pridaj tu niečo neskôr
          </div>

          <div className="ml-8">
            <button className="test bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="https://www.spsbj.sk/">Školská Knižnica</a>
            </button>
            <button className="newTest ml-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <a href="/books">Všetky Knihy</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
