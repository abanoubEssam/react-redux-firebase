import { Dispatch } from "redux";
import { Project } from "../../components/projects/project.interface";

export const createProject = (project: Project) => {
    return (dispatch: Dispatch, getState: any, { getFirebase, getFirestore }: any) => {
        dispatch({ type: "ADD_PROJECT", project })
    }
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }
}
