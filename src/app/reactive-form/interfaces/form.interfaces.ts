export interface ITaskType {
  id: string;
  value: string;
}

export interface ITaskStatus {
  id: string;
  value: string;
}

export interface ITask {
  task: string;
  taskType: string;
  taskStatus: string;
  date: string;
}
