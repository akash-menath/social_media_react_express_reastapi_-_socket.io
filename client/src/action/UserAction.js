import * as UserApi from "../api/UserRequst"


export const updateUser =(id,formData)=>async(dispatch)=>{
dispatch({type:"UPDATING_START"})
try {
    const {data}=await UserApi.updateUser(id,formData)
dispatch({type:"UPDATING_SUCCESS",data:data})
    
} catch (error) {
dispatch({type:"UPDATING_FAILED"})

    console.log(error);
}
}
export const followUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"FOLLOW-USER"})
    UserApi.followUser(id,data)
}

export const unFollowUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"UNFOLLOW-USER"})
    UserApi.unFollowUser(id,data)
}