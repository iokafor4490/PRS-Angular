import { User } from "./user.class";

export class Request {
    id: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    submittedDate: string;
    dateNeeded: string;
    status: string;
    total: number;
    user: User;

    constructor(id: number = 0, description: string = "",
        justification: string = "", rejectionReason: string = "",
        deliveryMode: string = "", submittedDate: string = "",
        dateNeeded: string = "", status: string = "", total: number,
        user: User) {
            this.id = id;
            this.description = description;
            this.justification = justification;
            this.rejectionReason = rejectionReason;
            this.deliveryMode = deliveryMode;
            this.submittedDate = submittedDate;
            this.dateNeeded = dateNeeded;
            this.status = status;
            this.total = total;
            this.user = user;
        }

}