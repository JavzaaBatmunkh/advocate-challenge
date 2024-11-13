import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  isDone: { type: Boolean, default: false
},
  taskName: {
    type: String,
    required: true,
  },
  priority:{
    type: Number,
    required: true
  } ,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
 
export default Task