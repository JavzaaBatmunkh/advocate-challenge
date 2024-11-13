import { addTask } from "../../graphql/resolvers/mutations/add-task";
import Task from "../../graphql/lib/taskModel";

jest.mock("../../graphql/lib/taskModel", () => ({
  create: jest.fn(),
}));

describe("addTask Mutation", () => {
  it("Should create a new task", async () => {
    (Task.create as jest.Mock).mockResolvedValue({
      taskName: "Test Task",
      priority: 2,
      _id: "1",
      isDone: false,
    });

    const result = await addTask({}, { task: { taskName: "Test Task", priority: 2 } });

    expect(result).toEqual({
      taskName: "Test Task",
      priority: 2,
      _id: "1",
      isDone: false,
    });

  });
});
