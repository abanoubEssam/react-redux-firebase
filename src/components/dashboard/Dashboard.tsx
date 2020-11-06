import React from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

export interface DashboardProps {
    projects?: any
}

const Dashboard: React.FC<DashboardProps> = (props) => {
    console.log("props", props)
    const { projects } = props
    console.log("projects", projects)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    console.log("mapStateToProps -> state", state)
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);