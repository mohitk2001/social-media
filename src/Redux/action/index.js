export const addUsers=(data)=>{
    return{
        type:"Add_user",
        payload:{
            details:data
        }
    }
}

export const removeLoginStatus=(data)=>{
    return {
        type:"Logout",
        payload:{
            details:data
        }
    }
}
export const addToken=(data)=>{
    return {
        type:"Add_token",
        payload:{
            data:data
        }
    }
}