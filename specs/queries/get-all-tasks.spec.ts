import { getAllTasks } from "../../graphql/resolvers/queries/get-all-tasks";
import Task from "../../graphql/lib/taskModel";

jest.mock("../../graphql/lib/taskModel", () => ({
  find: jest.fn(),
}));

describe("getAllTasks function", () => {
  it("Should return a list of all tasks", async () => {
   
    (Task.find as jest.Mock).mockResolvedValue([
      { taskName: "Task 1", priority: 1, _id: "1", isDone: false },
      { taskName: "Task 2", priority: 2, _id: "2", isDone: true },
    ]);

    const result = await getAllTasks();


    expect(result).toBeDefined();
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ taskName: "Task 1", priority: 1, isDone: false });


    expect(Task.find).toHaveBeenCalledWith({});
  });
});
