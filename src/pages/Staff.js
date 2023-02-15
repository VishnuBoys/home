import StaffTable from "../components/StaffTable";

export default function Staff() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Staff Members
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
        </div>
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
  );
}
