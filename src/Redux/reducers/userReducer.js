const initialValue={
    name:null,
    id:null,
    email:null,
}

const userReducer=(state=initialValue,action)=>{
    switch(action.type){
        case "Add_user":
            console.log(action.payload);
            return state;
        default:
            return state
    }
}
export default userReducer