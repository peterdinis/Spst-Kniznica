import Header from "../shared/Header";
import * as api from "../../api/queries/categoryQueries";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import FallbackRender from "../shared/errors/FallbackRender";
import FallbackLoader from "../shared/FallbackLoader";
import { placeholderCategory } from "@/data/placeholderCategory";
import useTeacher from "@/hooks/useTeacher";
import useAdmin from "@/hooks/useAdmin";
import { WarningIcon } from "@chakra-ui/icons";
import { ApiModal } from "../shared/modals";
import {Tag} from "@chakra-ui/react";

const CategoryInfo: React.FC = () => {
  const router = useRouter();
  const { query, isReady } = useRouter();
  const { teacher } = useTeacher();
  const { admin } = useAdmin();

  if (!isReady) {
    return <FallbackLoader />;
  }

  const { data, isError, isLoading } = useQuery(
    ["categoryDetail", query.id as unknown as number],
    () => api.getOneCategory(Number(query.id) as unknown as string),
    {
      retry: 2,
      placeholderData: placeholderCategory,
    }
  );

  if (isError) {
    return <FallbackRender error="Nastala chyba" />;
  }

  if (isLoading) {
    return <FallbackLoader />;
  }

  const navigateToCategories = () => {
    router.push("/category/all");
  };

  return (
    <>
      <Header name="Detail Kategórie" />
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="mt-4 border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Meno kategórie
              </dt>
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
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Počet kníh ktoré majú túto kategóriu
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {!data.books || data.books.length === 0 ? (
                  <>
                    <dd className="mt-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Kategória nie je priradená pri žiadnej knihe{" "}
                      <WarningIcon />
                    </dd>
                  </>
                ) : (
                  <div>
                    {data.books.map((item: { name: string }) => {
                      return (
                        <Tag
                          key={item.name}
                          variant='solid' colorScheme='teal'
                          mr={4}
                        >
                          {item.name}
                        </Tag>
                      );
                    })}
                  </div>
                )}
              </dd>
            </div>
          </dl>
          <button
            onClick={navigateToCategories}
            className="mt-6 bg-blue-200 rounded-lg p-2 font-extrabold"
          >
            Späť na kategórie
          </button>
        </div>
      </div>
      {(teacher || admin) && (
        <>
          <button className="float-right">
            <ApiModal
              modalButtonText={"Uprav kategóriu"}
              modalHeaderText={"Uprav kategóriu"}
              modalCloseText={"Zatvor"}
            >
              CHILDREN
            </ApiModal>
          </button>
          <button className="mr-4 float-right">
            <ApiModal
              modalButtonText={"Zmazať kategóriu"}
              modalHeaderText={"Zmazať kategóriu"}
              modalCloseText={"Zatvor"}
            >
              CHILDREN
            </ApiModal>
          </button>
        </>
      )}
    </>
  );
};

export default CategoryInfo;
