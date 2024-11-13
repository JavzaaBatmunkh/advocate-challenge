import { addTask } from "./mutations/add-task";
import { updateTask } from "./mutations/update-task";
import { getAllTasks } from "./queries/get-all-tasks";
import { getDoneTasksLists } from "./queries/get-done-tasks";

export const resolvers = {
  Query: {
    getDoneTasksLists,
    getAllTasks
  },
  Mutation: {
    addTask,
    updateTask
  },
};
