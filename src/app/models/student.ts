import { User, Project } from "../models";

export class Student extends User {

    verificationToken: string;
    projects: Project[];
}