import {User,Student,Concept} from './index'
export class Project {
    ProjectId: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    user : User;
    students:Student[];
    registerToConceptId:number;
}