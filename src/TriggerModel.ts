import { EntityModel, TaskModel, NotificationModel, TriggerActionModel } from ".";

export class TriggerModel {

    _id?: string;

    active: boolean;

    on: 'create' | 'update' | 'delete';
    // label for this trigger
    label: string;

    // entity type name
    entity: string;

    data: EntityModel;

    webHooks: {
        url: string,
        fields: string[]
    }[];

    tasks: TaskModel[];

    actions: TriggerActionModel[];

    notifications: NotificationModel[];

}