import * as api from "@/api/queries/bookingQueries";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IBooking } from "@/interfaces/IBooking";
import { WarningIcon } from '@chakra-ui/icons';
import { ReturnBookModal } from ".";
import { FallbackLoader, FallbackRender } from "../shared";

const MyBooks: React.FC = () => {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <FallbackLoader />;
  }
  const { data, isLoading, isError } = useQuery(
    ["myBorrowedBooks", query.username as unknown as string],
    () => api.getMyBorrowedBooks(query.username![0] as unknown as string)
  );

  if (isLoading) {
    return <FallbackLoader />;
  }

  if (isError) {
    return <FallbackRender error={"Nastala Chyba"} />;
  }

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Id knihy</th>
                <th className="px-4 py-3">Požičaná od</th>
                <th className="px-4 py-3">Požičaná do</th>
                <th className="px-4 py-3">Vrátiť knihu</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data === null || data === undefined && <div className="flex justify-center aling-top text-black text-xl">Nemáte žiadne požičané knihy <WarningIcon /></div>}
              {data &&
                data.map((item: IBooking) => {
                  return (
                    <>
                      <tr className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold text-black">{item.bookId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          {item.from}
                        </td>
                        <td className="px-4 py-3 text-xs border">
                          <span className="px-2 py-1 font-bold  text-red-700 bg-red-100 rounded-sm">
                            {" "}
                            {item.to}
                          </span>
                        </td>
                        <td className="text-sm border">
                          <ReturnBookModal />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBooks;