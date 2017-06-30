import { Company,User } from "../models";

export class Concept {
    ConceptId: number;
    ConceptTitle: string;
    ConceptDescription: string;
    conceptType: String;
    ConceptFromDate: Date;
    ConceptToDate: Date;
    ConceptOpenToInstitution: boolean;
    ConceptOpenToAnyLocation: number;

    company:Company;
    user:User;
   
}