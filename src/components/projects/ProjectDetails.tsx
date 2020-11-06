import React from 'react'
export interface ProjectDetailsProps {

}

const ProjectDetails: React.FC<ProjectDetailsProps> = (props: any) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque impedit consequuntur, assumenda doloribus alias saepe deleniti voluptatibus cum, asperiores vitae ipsam fugit commodi accusantium labore nemo eveniet aspernatur quos!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by ....</div>
                    <div>2nd Sept 2am</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;