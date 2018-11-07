export class NotificationModel {


    _id?: string;

    type: 'push' | 'fax' | 'sms' | 'email';

    subject: string;
    template: string;
    templateModel: any;
    users: string[];
    groups: string[]
    peoples: string[];


}