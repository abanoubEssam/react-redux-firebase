import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Project } from './project.interface';

export interface CreateProjectProps {

}

const CreateProject: React.FC<CreateProjectProps> = (props: any) => {
    console.log("props d", props)

    const { register, handleSubmit, watch, errors } = useForm();

    const onCreateProjectSubmit = (data: any) => {
        // createProject(data)
        props.createProject(data)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onCreateProjectSubmit)} className="white">
                <h5 className="grey-text text-darken-3">
                    Create Project
                </h5>
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input name="title" type='text' id="emaititlel" ref={register({ required: true })} />
                    {errors.title && <span>This field is required</span>}

                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea" name="content" id="content" ref={register({ required: true })} />
                    {errors.content && <span>This field is required</span>}

                </div>


                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Create
                </button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        createProject: (project: Project) => {
            return dispatch(createProject(project))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);