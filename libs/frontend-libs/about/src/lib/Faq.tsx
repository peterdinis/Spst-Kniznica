import FaqQuestions from './FaqQuestions';
import {useNavigate} from "react-router-dom";

const Faq = () => {

  const navigate = useNavigate();

  const navigateToFaq = () => {
    navigate("/faq");
  }

  return (
    <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Časté otázky
      </h1>
      <div className="text-center mt-5">
        <button onClick={navigateToFaq}>Nová otázka</button>
      </div>
      <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center">
            <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Otázky
            </h2>
            <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              laudantium vitae dignissimos aliquid ab quas temporibus ratione
              harum error rerum?
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input
                className="focus:outline-none bg-white"
                type="text"
                placeholder="Hľadaj otázku"
              />
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <FaqQuestions />
    </div>
  );
};

export default Faq;
