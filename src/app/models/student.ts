import { User, Project } from "../models";

export class Student extends User {

    projects: Project[];
}