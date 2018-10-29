import { ValidationErrorInterface } from ".";
import { validate } from 'serendip-utility'
import { EntityModel } from "../EntityModel";

export class SaleItemModel {


}

export class SaleModel extends EntityModel {


    constructor(model?: SaleModel) {

        super(model);


        this.date = model.date;
        this.items = model.items;
        this.company = model.company;

    }

    date: number;
    items: SaleItemModel[];
    company: string;

    static async validate(model: SaleModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];

        if (errs && errs.length > 0)
            throw errs;

    }

}