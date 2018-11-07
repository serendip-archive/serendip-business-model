export class TaskModel {

    constructor() {

    }

    _id?: string;

    subject: string;

    description: string;

    relativeDate: { type: string, value: string }

    absoluteDate: Date;

    entity: string;

    groups: string[];

    users: string[];

}