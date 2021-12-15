const initialValues={
    token:null,
    login:false
}
const addToken=(state=initialValues,action)=>{
    switch (action.type) {
        case "Add_token":
            state.token=action.payload.data;
            state.login=true
            return state
        default:
           return state
    }
}
export default addToken