import * as AuthApi from '../api/Auth Request.js'

export const logIn =(formData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try {
        
        const {data}= await AuthApi.logIn(formData)
    dispatch({type:"AUTH_SUCCESS",data:data})

    } catch (error) {
        console.log(error);
    dispatch({type:"AUTH_FAILD"})

    }

}
export const signUp =(formData)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try {
        
        const {data}= await AuthApi.signUp(formData)
    dispatch({type:"AUTH_SUCCESS",data:data})

    } catch (error) {
        console.log(error);
    dispatch({type:"AUTH_FAILD"})

    }

}

export const logout = ()=>async(dispatch)=>{
    dispatch({type:"LOGOUT"})
}