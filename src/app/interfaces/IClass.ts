import { IStudent } from './IStudent';

export interface IClass {
  id: number;
  name: string;
  teacher: string;
  maxNoOfStudents: number;
  students: IStudent[];
}
