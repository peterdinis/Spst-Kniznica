import * as ReactDOM from 'react-dom/client';
import './app/app.module.css';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.css';
import 'draft-js/dist/Draft.css';
import {  QueryClientProvider } from '@tanstack/react-query';
import {queryClient} from "libs/frontend-libs/api/src/lib/queryClient"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </BrowserRouter>
  </QueryClientProvider>
);
