import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-purple">
            Nifty Chess
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 text-center  opacity-25 my-0 py-0 rounded-t">
              Collect and trade your own and famous games of chess
            </div>
          </div>
          <Link
            to={routes.newGame()}
            type="submit"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            Save your Game
          </Link>
        </div>
      </section>

      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                What is Nifty Chess?
              </h3>
              <p className="text-gray-600 mb-8">
                NiftyChess is a way to save any game of chess ever played. We
                think chess is a beautiful art. Collect your favorite openings,
                famous games, or personal matches. Every saved game is unique.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">Image goes here</div>
          </div>

          {/*<div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">Image goes here</div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Styled with Tailwind CSS
                </h3>
                <p className="text-gray-600 mb-8">
                  Tailwind CSS is a highly customizable, low-level CSS framework
                  that gives you all of the building blocks you need to build
                  bespoke designs without any annoying opinionated styles you
                  have to fight to override.
                  <br />
                  <br />
                  Images from:{' '}
                  <a
                    className="text-orange-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        */}
        </div>
      </section>

      {/* Title cards */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
            Start your Digital Chess Collection
          </h3>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="https://www.gatsbyjs.org/"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  Blazing Fast
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Static Progressive Web App
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Why Gatsby? Gatsby is a static PWA (Progressive Web App)
                  generator. Gatsby loads only the critical HTML, CSS, data, and
                  JavaScript so your site loads as fast as possible.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="https://tailwindcss.com/"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  Tailwind is different
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  State-of-the-art CSS Framework
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Instead of opinionated predesigned components, Tailwind
                  provides low-level utility classes that let you build
                  completely custom designs without ever leaving your HTML.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  Open-Source
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Coded by <a href="https://twitter.com/Sm0keDev">Sm0ke</a>{' '}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  The source code is released under a license in which the
                  copyright holder grants users the rights to study, change, and
                  distribute the software to anyone and for any purpose.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waves SVG */}
      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g className="wave" fill="#ffffff">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#ff59d6">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      {/* CTA block */}
      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Mint your game
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight">
          Grab your game ID from LiChess or Chess.com
        </h3>

        <Link
          to={routes.newGame()}
          type="submit"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Mint
        </Link>
      </section>
    </>
  )
}

export default HomePage
