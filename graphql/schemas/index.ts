import { gql } from "graphql-tag";


export const typeDefs = gql`
scalar Date
scalar ObjectId

  type Task {
    taskName: String!
    isDone: Boolean
    priority: Int!
    createdAt: Date
    updatedAt: Date
    _id: ObjectId
  }
  
  type Query{
    getAllTasks: [Task]!
    getDoneTasksLists: [Task]!
  }

  type Mutation {
    addTask(task: AddTaskInput): Task
    updateTask(taskId: String!, task: UpdateTaskInput!): Task
  }

  input AddTaskInput{
    taskName: String!
    isDone: Boolean
    priority: Int!
    createdAt: Date
    updatedAt: Date
  }

  input UpdateTaskInput{
    taskName: String
    isDone: Boolean
    priority: Int
  }
`;
