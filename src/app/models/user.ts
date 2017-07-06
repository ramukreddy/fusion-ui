
export class User {
    userId: number;
    email: string;
    password: string;
    FirstName: string;
    LastName: string;
    RoleName: string;
    fullName: string = this.LastName + "," + this.FirstName;
    constructor(userIdentifucation: number) {
        this.userId = userIdentifucation;
    };

    isAdmin() {
        if (this.RoleName == 'CompanyAdmin')
            return true;
    }

    isTeacher() {
        if (this.RoleName == 'Teacher')
            return true;
    }
    isStudent() {
        if (this.RoleName == 'Student')
            return true;

    }
}