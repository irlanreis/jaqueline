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

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, profileImage }) => {
  return (
    <>
      <div className="flex justify-center mb-12">
        <img
          src={profileImage}
          alt="Jaqueline Reis"
          className="w-28 h-28 sm:w-36 sm:h-36 object-cover object-center rounded-full border-2 border-bejeAbobora"
          loading="lazy"
        />
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
