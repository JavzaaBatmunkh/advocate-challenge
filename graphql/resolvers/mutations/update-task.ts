import { UpdateTaskInput } from '@/generated';
import Task from '@/graphql/lib/taskModel';
import { ObjectId, Types } from 'mongoose';


export const updateTask = async (_: unknown, {taskId, task }: { taskId: string, task: UpdateTaskInput }) => {
  try {
    const updatedTask= 
    await Task.findByIdAndUpdate( taskId, 
       task, 
       {new:true}
    )
   
   return updatedTask;
    
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("Error updating task"); 
  }
  };
  