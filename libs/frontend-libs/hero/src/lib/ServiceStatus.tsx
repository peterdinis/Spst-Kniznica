import { useQuery } from '@tanstack/react-query';
import * as api from 'libs/frontend-libs/api/src/lib/queries/exampleQueries';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function ServiceStatus() {
  const { data} = useQuery(['serviceStatus'], api.getServiceStatus, {
    initialData: "WORK PING"
  });
  
  return (
    <div className="mt-5 ml-5 text-green-800 text-xl">ServiceStatus {data.message} <SentimentSatisfiedAltIcon /></div>
  )
}

export default ServiceStatus;
