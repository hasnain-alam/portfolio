import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 - Blogging App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">A Blogging React App</h3>
              <p className="text-gray-400 mb-4">
                Developed a fully functional blogging platform that enables users
                to create, edit, and manage blog posts efficiently. The application
                leverages a modern tech stack, ensuring scalability, performance, and
                a seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "TailwindCSS", "React", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://blog-app-ten-neon.vercel.app/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Project 2 - Expense Tracker */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Expense Tracker System</h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive web app to track personal income and expenses in real time.
                Features include authentication, transaction categorization, dynamic balance calculation,
                and interactive dashboards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "React", "Express.js", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hasnain-alam/Expense-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Project 3 - Contact Management App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Contact Management App</h3>
              <p className="text-gray-400 mb-4">
                A contact management application that allows users to add, edit, delete, and search contacts.
                Includes authentication, real-time updates, and an intuitive UI for efficient use.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "React", "MongoDB"].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://contact-manager-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Project 4 - Restaurant Menu App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Restaurant Menu App</h3>
              <p className="text-gray-400 mb-4">
                A menu app that lets users browse, filter, and search dishes with dynamic UI.
                Optimized for mobile and desktop with responsive layout and modern filtering UX.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "TailwindCSS", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hasnain-alam/restaurantMenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
