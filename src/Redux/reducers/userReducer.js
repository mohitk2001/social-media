const initialValue={
    name:null,
    id:null,
    email:null,
    isLogged:false
}

const userReducer=(state=initialValue,action)=>{
    switch(action.type){
        case "Add_user":
            console.log(action.payload);
            state.id=action.payload.details._id;
            state.name=action.payload.details.name;
            state.email=action.payload.details.email
            state.isLogged=true
            return state;
        case "Logout":
            console.log(action.payload)
            state.id=null;
            state.email=null;
            state.name=null;
            state.isLogged=false
            return state
        default:
            return state
    }
}
export default userReducer