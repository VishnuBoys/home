
  import History from "../components/History"

  export default function About ()  {
    return (
        <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <p className="relative text-amber-500">A Message from our Principal</p>
            </span>
            
          </h2>
        </div>
      </div>
    </div>
  
        <div class="mx-auto max-w-5xl px-4 py-8">
        <section class="rounded-lg bg-gray-100 p-8">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <img
        alt="Man"
        src='/'
      />
            <blockquote class="sm:col-span-2">
              <p class="text-xl font-medium sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
                autem alias.
              </p>
      
              <cite class="mt-8 inline-flex items-center not-italic">
                <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p class="text-sm uppercase text-gray-500 sm:ml-3">
                  <strong>Devindra Barrath</strong>, <span class="text-amber-400 text-light">Vishnu Boys Hindu College.</span>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
      <History/>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <p className="relative text-amber-500">School Accomplishments</p>
            </span>
            
          </h2>
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
          Our students have achieved a great deal and received numerous awards.
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
          These are only a small sample of the many honors that our students and school have received.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Scholarships</h6>
          <p className="mb-3 text-sm text-gray-900">
            A few of our hardworking students who receives Scholarships.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              John Smith - UWI Scholarship
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              John Smith - UTT Scholarship
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Matthew Nicolai - Tech Genius
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Staff Accomplishments</h6>
          <p className="mb-3 text-sm text-gray-900">
            There can be no thought of finishing for "aiming for the stars".
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Life
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Aliens
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Shrek
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-50">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                fill="none"
                stroke="currentColor"
              />
              <ellipse
                cx="19.078"
                cy="4.922"
                fill="none"
                rx="2.5"
                ry="4.95"
                stroke="currentColor"
                transform="translate(2.107 14.932) rotate(-45)"
              />
              <path
                d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                fill="none"
                stroke="currentColor"
              />
              <path
                d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                fill="none"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">School Achievements</h6>
          <p className="mb-3 text-sm text-gray-900">
            We are all connected to the universe atomically, strong bonds.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Infinity
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Stars
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Black Holes
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-50">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                fill="none"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="10 11 10 6 6 2 3 5 7 9"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="15 12 15 17 19 21 22 18 18 14"
                stroke="currentColor"
              />
              <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="currentColor" />
              <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="currentColor" />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Sport Accolades</h6>
          <p className="mb-3 text-sm text-gray-900">
            For those who have seen the Earth from space or in dreams.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Listen
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Communicate
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Run
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
    );
  };