import React from 'react';

function FaqQuestions() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  return (
    <>
      <div className="lg:w-8/12 w-full mx-auto">
        {/* <!-- Question 1 --> */}
        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className=" ">
              <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                {' '}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q1.
                </span>{' '}
                How do i know if a product is available in boutiques?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={'transform ' + (open ? 'rotate-180' : 'rotate-0')}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={'mt-6 w-full ' + (open ? 'block' : 'hidden')}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
            <button className="mt-4 text-red-800">Answer the question</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqQuestions;
