export interface Task {
  id: number;
  description: string;
  priority: string;
  dependencies: number[];
  status?: string;
}