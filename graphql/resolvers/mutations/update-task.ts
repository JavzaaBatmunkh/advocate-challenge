import { UpdateTaskInput } from '@/generated';
import Task from '@/graphql/lib/taskModel';


export const updateTask = async (_: unknown, {taskId, task }: { taskId: string, task: UpdateTaskInput }) => {
 
    const updatedTask= 
    await Task.findByIdAndUpdate( taskId, 
       task, 
       {new:true}
    )
   
   return updatedTask;
    

  };
  