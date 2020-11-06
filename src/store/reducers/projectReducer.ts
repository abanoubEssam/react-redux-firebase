const initState = {
    projects: [
        {id: '1' , title: 'help me' , content: 'content 1'},
        {id: '2' , title: 'help me 2' , content: 'content 2'},
        {id: '3' , title: 'help me 3' , content: 'content 3'},
    ]
}
const projectReducer = (state = initState , action: any) => {
    console.log("projectReducer -> action", action)
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log("Action HERE " , action.project);
            break;
    
        default:
            break;
    }
    return state
}

export default projectReducer