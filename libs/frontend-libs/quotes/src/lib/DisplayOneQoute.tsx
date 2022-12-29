import * as quoteApi from "libs/frontend-libs/api/src/lib/queries/quoteQueries";
import { useQuery } from '@tanstack/react-query';
import {placeholderQuote} from "libs/frontend-libs/data/src/lib/placeholderQuote";

function DisplayOneQoute() {
  const {data} = useQuery(["quoteData"], quoteApi.getQuotes, {
    initialData: placeholderQuote
  });

  console.log(data);
  return (
    <div>
      <h1 className="font-bold">{data[0].author}</h1> <p className="mt-2">{data[0].text}</p>
    </div>
  )
}

export default DisplayOneQoute