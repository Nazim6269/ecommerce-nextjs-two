const RefundStatus = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Status for your refund request
          </h2>

          <div className="items-center gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <a
              href="#"
              className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
            >
              <img
                className="h-auto max-h-full w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="imac image"
              />
              <img
                className="hidden h-auto max-h-full w-full dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <a
              href="#"
              className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"
            >
              Sony Playstation 5 Digital Edition Console with Extra Blue
              Controller, White PULSE 3D Headset and Surge Dual Controller
              Charge Docker
            </a>
          </div>

          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-primary-800 dark:text-primary-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                <svg
                  className="me-1 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                02 February 2024
              </span>
              <h3 className="mb-0.5 mt-2 text-lg font-semibold text-primary-800 dark:text-primary-300">
                Your request has been registered
              </h3>
              <p className="text-base font-normal text-primary-700 dark:text-primary-300">
                Please pack the product and accessories received in the original
                packaging. The courier will contact you to pick up the package
                from the specified address.
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                Pick up product from the address
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Estimated time 2 February 2024 - 5 February 2024.
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                Product check
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We will carefully check the product and inform you as soon as
                possible if you are eligible for a refund.
              </p>
            </li>

            <li className="ms-6">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
                <svg
                  className="h-3 w-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
              </span>
              <h3 className="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">
                Refund the amount
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We will return the amount depending on the option chosen.
              </p>
            </li>
          </ol>

          <div className="sm:flex items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="#"
              title=""
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              role="button"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
              Back to your account
            </a>
            <button
              type="button"
              className="w-full sm:w-auto flex justify-center items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Cancel the refund
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundStatus;
