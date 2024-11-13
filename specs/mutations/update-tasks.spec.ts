import { updateTask } from "../../graphql/resolvers/mutations/update-task";
import Task from "../../graphql/lib/taskModel";
import { UpdateTaskInput } from "../../generated";

// Mock the Task model
jest.mock("../../graphql/lib/taskModel", () => ({
  findByIdAndUpdate: jest.fn(),
}));

describe("updateTask Mutation", () => {
  const mockTaskId = "63f7b8977e3a4a4b887df45e";
  const mockTask: UpdateTaskInput = {
    taskName: "Updated Task",
    priority: 1,
    isDone: true,
  };

  it("Should update a task successfully", async () => {
    // Mock the resolved value for Task.findByIdAndUpdate
    (Task.findByIdAndUpdate as jest.Mock).mockResolvedValue({
      _id: mockTaskId,
      taskName: "Updated Task",
      priority: 1,
      isDone: true,
    });

    const result = await updateTask({}, { taskId: mockTaskId, task: mockTask });

    // Assertions
    expect(result).toBeDefined();
    expect(result).toMatchObject({
      _id: mockTaskId,
      taskName: "Updated Task",
      priority: 1,
      isDone: true,
    });

    // Ensure Task.findByIdAndUpdate was called with the correct arguments
    expect(Task.findByIdAndUpdate).toHaveBeenCalledWith(
      mockTaskId,
      mockTask,
      { new: true }
    );
  });

 
});
