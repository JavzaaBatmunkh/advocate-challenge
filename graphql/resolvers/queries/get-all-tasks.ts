import Task from "@/graphql/lib/taskModel"

export const getAllTasks=async()=>{
    return await Task.find({})
  }