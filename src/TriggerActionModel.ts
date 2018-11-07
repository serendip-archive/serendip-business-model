import { EntityModel ,TaskModel} from ".";

export class TriggerActionModel {


    type: 'create_entity' | 'update_entity' | 'remove_entity';
    
    entity: string;

    // any property value could start with '^' for pointing to the trigger's data properties
    model: EntityModel;


}