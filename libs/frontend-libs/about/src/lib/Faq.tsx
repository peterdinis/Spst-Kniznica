import FaqQuestions from './FaqQuestions';
import SearchIcon from '@mui/icons-material/Search';

const Faq = () => {
  return (
    <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Časté otázky
      </h1>
      <div className="text-center mt-5">
        <button>Nová otázka</button>
      </div>
      <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center">
            <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Časté otázky
            </h2>
          </div>

          <div className=" flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input
                className="focus:outline-none bg-white"
                type="text"
                placeholder="Hľadaj otázku"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <FaqQuestions />
    </div>
  );
};

export default Faq;
