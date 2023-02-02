
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import subjects from "../docs/subjects.pdf"

export default function Curriculum() {
  return (
<div className="">

<section>
    <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:items-center">
              <div class="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Subjects Offered <br/> by Our School</h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-amber-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 ml-1 bg-amber-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-amber-500 rounded-full"></span>
                    </div>
                  </div>

                </div>

            </div>



    </div>
</section>



<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
<Viewer fileUrl={subjects} />;
</Worker>
</div>

  )
}