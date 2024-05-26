import React from "react";

const Offers = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the right plan for your fitness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Basic
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Everything necessary to get started.
              </p>
              <p className="mt-8 text-4xl font-extrabold text-gray-900">
                180 DT
                <span className="text-base font-medium text-gray-500">
                  / month
                </span>
              </p>
              <p className="mt-4 text-sm text-gray-500">2160 DT / year</p>
              <a
                href="#"
                className="mt-8 block w-full py-3 px-5 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Buy Plan
              </a>
            </div>
            <div className="px-6 pt-6 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="ml-3 text-base text-gray-700">
                    Basic gym access
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org /2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="ml-3 text-base text-gray-700">
                    Access to group classes
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Essential
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Everything in Basic, plus essential tools for growing your
                fitness routine.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  400 DT
                </span>
                <span className="text-base font-medium text-gray-500">
                  / 3 month
                </span>
              </p>
              <p className="mt-4 text-sm text-gray-500"> 1600 DT / year</p>
              <a
                href="#"
                className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-indigo-700"
              >
                Buy Plan
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Personal trainer sessions
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Nutrition guidance
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Growth
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Everything in Essential, plus advanced tools and resources for
                reaching your fitness goals.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  1200 DT
                </span>
                <span className="text-base font-medium text-gray-500">
                  / year
                </span>
              </p>
              <a
                href="#"
                className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-indigo-700"
              >
                Buy Plan
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Access to exclusive workout programs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Personalized meal planning
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offers;
