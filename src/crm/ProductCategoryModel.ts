import { ValidationErrorInterface } from '..';
import { validate } from 'serendip-utility'

import { EntityModel } from "../EntityModel";

export class ProductCategoryModel extends EntityModel {

    static async validate(model: ProductCategoryModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];

        if (errs && errs.length > 0)
            throw errs;
    }

    constructor(model: ProductCategoryModel) {

        super(model);

        this.assuranceTemplate = model.assuranceTemplate;
        this.name = model.name;

        this.master = model.master;


    }


    name: string;
    master: string;
    assuranceTemplate: string;


}