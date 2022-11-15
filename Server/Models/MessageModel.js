import mongoose from "mongoose";

const chatShema = mongoose.Schema({
  chatId: {
    type: String,
  },

  senderId: {
    type: String,
  },
  text:{
    type:String
  }
  
},{
    timestamps: true
});
const MessegeModel= mongoose.model("message",chatShema)
export default  MessegeModel
