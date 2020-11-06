import React from 'react'
import { Project } from './project.interface';
import ProjectSummary from './ProjectSummary';

export interface ProjectListProps {
    projects?: []
}



const ProjectList: React.FC<ProjectListProps> = ({ projects }: ProjectListProps) => {
    console.log("props projects", projects)
    return (
        <div className="project-list section">

            {projects && projects.map((project: Project) => {
                return <ProjectSummary key={project.id} project={project} />
            })}


        </div>
    );
}

export default ProjectList;