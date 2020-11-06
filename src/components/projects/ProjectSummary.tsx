import React from 'react'
import { Project } from './project.interface';



export interface ProjectSummaryProps {
    project?: Project
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({project}: ProjectSummaryProps) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                     {project?.title}
             </span>
                <p>Posted by </p>
                <p className="grey-text">3rd september 2am</p>
            </div>
        </div>
    );
}

export default ProjectSummary;