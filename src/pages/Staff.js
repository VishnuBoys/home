import StaffTable from "../components/StaffTable";

export default function Staff() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-900 uppercase rounded-full bg-amber-400">
              Staff Members
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Meet</span>
            </span>{" "}
            our staff members
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We take great pride in the staff of our establishment.
          </p>
        </div>
        <section class="text-gray-600 body-font">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class="sm:w-1/2 mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/1201x501"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Devindra Barrath
                  </h2>
                  <p class="leading-relaxed text-base">Principal</p>
                </div>
                <div class="sm:w-1/2 mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/1202x502"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Omadath Navin Maharaj
                  </h2>
                  <p class="leading-relaxed text-base">Vice Principal</p>
                </div>
              </div>
            </div>
          </section>
          <StaffTable />
        </section>
      </div>
    </div>
  );
}
