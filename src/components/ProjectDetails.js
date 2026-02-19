import Image from "next/image";
import React from "react";

const ProjectDetails = ({ data, closePopup }) => {
  return (
    //   <!-- Modal Backdrop -->
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6">
      {/* <!-- Modal Container --> */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background dark:bg-background-dark rounded-xl shadow-2xl flex flex-col">
        {/* <!-- Close Button (Floating Top Right) --> */}
        <button
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 dark:bg-background-dark/80 text-gray-900 dark:text-white shadow-md hover:bg-background transition-colors duration-200 hover:text-slate-600 cursor-pointer"
          onClick={closePopup}
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        {/* <!-- Featured Image Header --> */}
        <div className="relative w-full h-64 md:h-96 shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
          <Image
            alt="Modern E-Commerce Platform Dashboard"
            className="h-full w-full object-cover"
            data-alt="Modern e-commerce dashboard interface on a screen"
            src={data.image}
          />
          <div className="absolute bottom-6 left-8 z-10">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {data.title}
            </h1>
            {/* <p className="text-white/90 text-lg mt-1">
              Scalable retail solution for global markets
            </p> */}
          </div>
        </div>
        {/* <!-- Content Section --> */}
        <div className="p-6 md:p-10 space-y-8">
          {/* <!-- Detailed Description --> */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                  Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {data.description}
                </p>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                Responsibilities
              </h3>
              <ul className="list-disc list-outside pl-5 text-slate-600 dark:text-slate-400 space-y-3 text-sm leading-relaxed">
                {data.responsibility.map((items) => {
                  return <li key={items}>{items}</li>;
                })}
                <li>
                  Collaborated with project managers and clients in Agile/Scrum
                  environments.
                </li>
              </ul>
            </div>
            {/* <!-- Sidebar Info: Technologies --> */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.technology.map((tech, index) => {
                    return (
                      <span
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20"
                        key={`${tech}__${index}_pd`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                  {/* <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    React.js
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    Node.js
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    Redis
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    Stripe API
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                    Docker
                  </span> */}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Project Stats
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Timeline</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {data.timeline}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Role</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {data.role}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- Footer Action Bar --> */}
          {data.url && (
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-[0.98] cursor-pointer"
                onClick={() => {
                  window.open(data.url, "_blank");
                }}
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                View Live Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
