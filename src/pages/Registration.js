import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { FacebookEmbed } from "react-social-media-embed";
import registration from "../docs/registration.pdf";

function Registration() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-900 uppercase rounded-full bg-amber-400">
              Registration
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">This page is for all your</span>
            </span>{" "}
            Registration needs
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Below is a step-by-step process on how to register to our school
            accompanied by a video for convenient viewing
          </p>
        </div>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <Viewer fileUrl={registration} />;
      </Worker>
      <section class=" bg-slate-50 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div class="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-16 py-20">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Check out our step by step video
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                This video demonstrates the process providing a step-by-step
                demonstration, which is 20 minutes long.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                If you are still having trouble registering please don't
                hesitate to{" "}
                <a href="/contact" className="underline hover:bg-amber-100">
                  contact us
                </a>
                .
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <FacebookEmbed
                url="https://www.facebook.com/watch/?v=473003740513303"
                width={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
