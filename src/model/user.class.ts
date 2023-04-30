export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(id: number = 0, userName: string = "",
        firstName: string = "", lastName: string = "", phone: string = "",
        email: string = "", isReviewer: boolean = false, isAdmin: boolean = false) {
            this.id = id;
            this.userName = userName;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.isReviewer = isReviewer;
            this.isAdmin = isAdmin;
        }
}