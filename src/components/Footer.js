import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">
              computer
            </span>
          </div>
          <span className="text-lg font-bold">Jeegar Ranpura</span>
        </div>
        <p className="text-slate-400 text-sm">
          {`© ${new Date()?.getFullYear()} Jeegar Ranpura. All rights reserved.`}
        </p>
        <div className="flex gap-6">
          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="http://github.com/jeegarranpura"
          >
            GitHub
          </a>
          <a
            className="text-slate-400 hover:text-white transition-colors"
            href="https://www.instagram.com/mr.jeegs"
          >
            Instagram
          </a>
          {/* <a
            className="text-slate-400 hover:text-white transition-colors"
            href="#"
          >
            Dribbble
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
