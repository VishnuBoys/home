import red from "../../images/articles/red.jpeg";
import blue from "../../images/articles/blue.jpeg";

export default function TugWar() {
  return (
    <div className="bg-gray-100">
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative">Tug</span> of War
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Tug of war is a sport that pits two teams against each other in a
            test of strength. Teams pull on opposite ends of a rope, with the
            goal being to bring the rope a certain distance in one direction
            against the force of the opposing team's pull.
          </p>
        </div>
      </div>
      <section className="p-4 bg-gray-200 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={red} alt="" className="h-80 w-50 " />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">
                Tug of War is a sport where every member of the team is equal.
              </h3>
              <p className="my-6">
                To succeed a team has to work together, encouraging true
                cooperation and team discipline. Tug of War is a true
                non-contact competitive sport suitable for a wide range of
                abilities. The sport is fully inclusive, it has been found
                especially suitable for individuals who would like to
                participate in sport and physical activity but lack the
                confidence/coordination/technical skills required in other
                sports.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img src={blue} alt="" className="h-80 w-300" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <h3 className="text-3xl font-bold">The goal is to have fun</h3>
              <p className="my-6">
                One of the best things about tug of war is that it’s a simple
                game. You just need a length of rope and a group of people. You
                don’t have to have a specific length of rope and you don’t need
                a specific number of people. Wearing gloves to protect against
                rope burn is a good idea though.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
