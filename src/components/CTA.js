import puja from "../images/puja.jpg"
  
  export default function Example() {
    return (

        <section class="bg-slate-100">

    <div class="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl pb-20 text-amber-500">Recent Updates & Upcoming Events</h1>
        <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6">
                <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={puja} alt=""/>

            </div>

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 class="text-yellow-500 text-lg capitalize">Graduation Ceremony</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500">
                        Look at the honors granted!
                    </a>
                </div>

                <hr class="my-6 border-gray-200"/>

                <div>
                    <h3 class="text-yellow-500 text-lg capitalize">Sports Day</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500">
                        See upcoming sports day for 2023.
                    </a>
                </div>

                <hr class="my-6 border-gray-200"/>

                <div>
                    <h3 class="text-yellow-500 text-lg capitalize">Puja & Divali Celebration</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500">
                    Join us for our termly puja session.
                    </a>
                </div>

                <hr class="my-6 border-gray-200"/>

                <div>
                    <h3 class="text-yellow-500 text-lg capitalize">PTA Meeting</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500">
                    Please attend our extremely important PTA. 
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


    )
  }