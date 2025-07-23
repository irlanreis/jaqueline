import React from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
}

interface ProjectsGridProps {
  projects: Project[];
  profileImage: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <>
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl md:text-4xl font-spectral text-bejeAbobora">Últimos projetos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover object-center"
                style={{ aspectRatio: '16/9' }}
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-spectral text-marrondarck mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
