import Header from "@/components/shared/Header";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/queries/bookingQueries";
import FallbackLoader from "@/components/shared/FallbackLoader";
import FallbackRender from "@/components/shared/errors/FallbackRender";
import ScrollToTop from "@/hooks/useScroll";
import { getBookingError } from "@/components/shared/errors/constants/errorMessages";
import { IBooking } from "@/interfaces/IBooking";
import { placeholderBooking } from "@/data/placeholderBooking";

const AdminBooking: React.FC = () => {
  const { data, isError, isLoading } = useQuery(
    ["allBookings"],
    () => api.getAllBookings,
    {
      initialData: placeholderBooking as Record<string, any>,
      retry: 2,
    }
  );

  if (isLoading) {
    return <FallbackLoader />;
  }
  if (isError) {
    return <FallbackRender error={getBookingError} />;
  }

  return (
    <>
      <Header name="Všetky objenávky" />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Meno používateľa</th>
                  <th className="px-4 py-3">Id objednávky</th>
                  <th className="px-4 py-3">Požičaná od</th>
                  <th className="px-4 py-3">Požičaná do</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data &&
                  data.map((item: IBooking) => {
                    return (
                      <>
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 text-ms font-semibold border">
                            {item.username}
                          </td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-bold rounded-sm">
                              {" "}
                              {item.bookId}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold rounded-sm">
                              {" "}
                              {item.from}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            <span className="px-2 py-1 font-bold rounded-sm">
                              {" "}
                              {item.to}
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
};

export default AdminBooking;
