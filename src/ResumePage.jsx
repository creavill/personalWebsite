import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const RESUME_CONFIG = {
  'devops-resume': {
    title: 'DevOps Resume',
    pdf: '/Conner_Reavill_DevOps_Resume.pdf',
  },
  'fullstack-resume': {
    title: 'Full-Stack Resume',
    pdf: '/Conner_Reavill_FullStack_Resume.pdf',
  },
  'SWE-resume': {
    title: 'Software Engineer Resume',
    pdf: '/Conner_Reavill_SWE_Resume.pdf',
  },
};

const ResumePage = () => {
  const { resumeType } = useParams();
  const config = RESUME_CONFIG[resumeType];

  if (!config) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Resume Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] flex flex-col">
      {/* Header bar */}
      <header className="glass border-b border-indigo-500/20 shadow-lg shadow-indigo-500/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-lg font-bold">
            <span className="text-indigo-400">CONNER</span>
            <span className="text-cyan-400 ml-2">REAVILL</span>
            <span className="text-zinc-500 ml-3 text-sm font-normal hidden sm:inline">
              — {config.title}
            </span>
          </h1>

          <a
            href={config.pdf}
            download
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-all duration-300"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1 flex flex-col">
        <object
          data={config.pdf}
          type="application/pdf"
          className="flex-1 w-full min-h-[calc(100vh-4rem)]"
        >
          {/* Fallback for browsers that don't support embedded PDF */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-zinc-400 mb-6">
                Unable to display PDF inline. Please download to view.
              </p>
              <a
                href={config.pdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                <Download size={18} />
                Download {config.title}
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
};

export default ResumePage;
