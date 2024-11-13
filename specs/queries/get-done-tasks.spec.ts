
import { getDoneTasksLists } from "../../graphql/resolvers/queries/get-done-tasks";
import Task from "../../graphql/lib/taskModel";


jest.mock('../../graphql/lib/taskModel', () => ({
  find: jest.fn()
}));

describe("getDoneTasksLists", () => {
  it("Should return done tasks", async () => {
   
    (Task.find as jest.Mock).mockResolvedValue([
      { _id: "1", isDone: true, title: "Task 1" },
      { _id: "2", isDone: true, title: "Task 2" }
    ]);

    const result = await getDoneTasksLists();
    
    expect(result).toEqual([
      { _id: "1", isDone: true, title: "Task 1" },
      { _id: "2", isDone: true, title: "Task 2" }
    ]);
  });
});
