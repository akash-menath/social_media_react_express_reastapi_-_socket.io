import * as PostApi from "../api/PostRequest.js";

export const getTimeLinePosts = (id) => async (dispatch) => {
  console.log('kkkkkkkkk'+id);
  dispatch({ type: "RETRIVING_START" });
  try {
    const { data } = await PostApi.getTimeLinePosts(id);
    
    dispatch({ type: "RETRIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIVING_FAIL" });
    console.log("work");

    console.log(error);
  }
};

