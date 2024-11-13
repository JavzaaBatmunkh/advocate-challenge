import { AddTaskInput } from "@/generated";
import Task from "@/graphql/lib/taskModel";

export const addTask = async(_: unknown, { task }: { task: AddTaskInput  }) => {

    const newTask = {
      ...task,
      createdAt: new Date(), 
      isDone: task.isDone ?? false, 
    };
    const savedTask= await Task.create(newTask)
  
  return savedTask; 

}
