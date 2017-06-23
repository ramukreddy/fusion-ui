import {User} from './index'
export class Project {
    ProjectId: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    user : User;
}