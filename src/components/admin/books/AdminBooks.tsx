import Header from "@/components/shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/bookQueries";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/ErrorRender";
import { IBook } from "@/interfaces/IBook";
import { placeholderBook } from "@/data/placeholderBook";
import ScrollToTop from "@/hooks/useScroll";

const AdminBooks: React.FC = () => {
  const { data, isLoading, isError } = useQuery(["adminBooks"], api.getBooks, {
    initialData: placeholderBook,
  });

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  console.log(data);

  return (
    <>
      <Header name="Všetky Knihy" />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Id knihy</th>
                  <th className="px-4 py-3">Názov knihy</th>
                  <th className="px-4 py-3">Požičaná do</th>
                  <th className="px-4 py-3">Vrátiť knihu</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* {data === null || data === undefined && <div className="flex justify-center aling-top text-black text-xl">Nemáte žiadne požičané knihy <SentimentVeryDissatisfiedIcon /></div>}
              {data &&
                data.map((item: IBooking) => {
                  return ( */}
                <>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">rrrr</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      rrrrrr
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-bold  text-red-700 bg-red-100 rounded-sm">
                        {" "}
                        rrrrr
                      </span>
                    </td>
                    <td className="text-sm border">rrrr</td>
                  </tr>
                </>
                {/*       );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
};

export default AdminBooks;
