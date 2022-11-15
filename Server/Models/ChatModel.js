import mongoose from "mongoose";

const chatShema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const ChatModel = mongoose.model("chat", chatShema);
export default ChatModel;
