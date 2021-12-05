export const addUsers=(data)=>{
    return{
        type:"Add_user",
        payload:{
            details:data
        }
    }
}