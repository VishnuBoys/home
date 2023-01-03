  import logo from "../images/true-logo.jpg"

  export default function About ()  {
    return (
        <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">A</span>
            </span>{' '}
            Message from our Principal
          </h2>
        </div>
      </div>
    </div>
  
        <div class="mx-auto max-w-5xl px-4 py-8">
        <section class="rounded-lg bg-gray-100 p-8">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <img
        alt="Man"
        src={logo}
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">School</span>
            </span>{' '}
            History
          </h2>
        </div>
      </div>
    </div>
    <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6 font-medium text-gray-500 ">The Vishnu Boys Hindu College opened its doors to 177 students on 4th September 2000 as part of the government’s USE programme.<br/> <br/>

The school came into existence through a review of the Concordat which had, for decades, stopped school expansion by Denominational Boards.<br/> <br/>

The SDMS had been given belated approval to create three new colleges for the academic year 2000 – 2001 and the VBHC was one. Permission was granted by the government to site the VBHC in Caroni.<br/> <br/>

The SDMS sought assistance from the then Minister of Works, Mr. Sadiq Baksh, for a lease on the Ministry of Works building in Caroni to become part to the VBHC and a lease was subsequently obtained. The SDMS then spent $150,000.00 to renovate the building under the Ministry of Education’s guidelines and this structure thus became half of the school’s physical plant; housing 80 students, washrooms, showers, stock room, administration/clerical offices and a staff room.<br/> <br/>

The VBHC started with a staff of 10 Teachers, 1 Clerk III, 1 Lab Assistant (another was subsequently added), 1 Security Officer, 1 Cleaner/Handyman and a Principal. A full curriculum was immediately implemented.<br/> <br/>

The first year challenge for the VBHC was the huge differential in the academic abilities of the first intake. With USE the school was assigned 80 students who were average or beyond in academic competence while 97 needed remedial tuition. Strategies were designed for a special scheme of work to encourage and not frustrate these 97 students.<br/> <br/>

The start of the college posed some challenges for all the stakeholders. The school started with few pieces of furniture and equipment. The SDMS rented plastic chairs and long tables for all the students before the government supplied furniture began to arrive. This has remained a yearly occurrence with each successive intake.<br/> <br/>

In spite of the challenges (limited physical resources, limited land space and constant exhaust fumes), all the stakeholders gave unstinting support, especially the parents and guardians. The latter gave moral and financial support and never took adversarial position.<br/> <br/>
</p>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">School</span>
            </span>{' '}
            Accomplishments
          </h2>
        </div>
      </div>
    </div>
</div>
    );
  };