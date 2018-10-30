import { ValidationErrorInterface } from "..";
import { EntityModel } from "../EntityModel";

export class AssuranceTemplateModel extends EntityModel {

    constructor(model: AssuranceTemplateModel) {

        super(model);

        this.type = model.type;
        this.checklist = model.checklist;
        this.absoluteExpiration = model.absoluteExpiration;
        this.relativeExpiration = model.relativeExpiration;
        this.relativeExpirationUnit = model.relativeExpirationUnit;

    }


    // could be warranty or guarantee
    type: string;


    checklist: string[];

    absoluteExpiration: Date;

    relativeExpiration: Number;
    relativeExpirationUnit: string;



    static async validate(model: AssuranceTemplateModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];

        if (errs && errs.length > 0)
            throw errs;
    }

}