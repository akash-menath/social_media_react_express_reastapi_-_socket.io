const authReducer = (
  state = { authData: null, loding: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loding: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loding: false, error: false };
    case "AUTH_FAILD":
      return { ...state, loding: false, error: true };

    case "UPDATING_START":
      return { ...state, updateLoding: true, error: false };

    case "UPDATING_SUCCESS":
      localStorage.setItem("profile",JSON.stringify({...action?.data}))
      return {
        ...state,
        authData: action.data,
        updateLoding: false,
        error: false,
      };
      case "UPDATING_FAILED":
        return { ...state, updateLoding: false, error: true };





        case "FOLLOW_USER":
        return { ...state, authData:{...state.authData,user:{...state.authData.user,following:[...state.authData.user.following,action.data]}}};
        case "UNFOLLOW_USER":
          return { ...state, authData:{...state.authData,user:{...state.authData.user,following:[...state.authData.user.following.filter((personId)=>personId!==action.data)]}}};
        





    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null, loding: false, error: false };
    default:
      return state;
  }
};

export default authReducer;
