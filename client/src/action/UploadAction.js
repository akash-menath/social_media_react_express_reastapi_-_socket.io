import * as UploadApi from "../api/UploadRequist";

export const uploadImage = (data) => async (dispatach) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    
    console.log(error);
  }
};
export const uploadPost = (data) => async (dispatach) => {
  dispatach({ type: "UPLOAD_START" });

  try {
    const newPost = await UploadApi.uploadPost(data);
    dispatach({ type: "UPLOAD_SUCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatach({ type: "UPLOAD_FAIL" });
  }
};
