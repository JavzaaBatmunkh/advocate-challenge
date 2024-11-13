import Task from "@/graphql/lib/taskModel";


export const getDoneTasksLists = async() => {
  return await Task.find({isDone: true});
};

