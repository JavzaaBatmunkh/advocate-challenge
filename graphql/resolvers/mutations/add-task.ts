import { AddTaskInput } from "@/generated";
import Task from "@/graphql/lib/taskModel";

export const addTask = async(_: unknown, { task }: { task: AddTaskInput  }) => {
  try {
    const newTask = {
      ...task,
      createdAt: new Date(), 
      isDone: task.isDone ?? false, 
    };
    const savedTask= await Task.create(newTask)
  
  return savedTask; 
    
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Error creating task: ");
    
  }
}
