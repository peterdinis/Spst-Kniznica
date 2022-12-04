import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './app/app.module.css';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
