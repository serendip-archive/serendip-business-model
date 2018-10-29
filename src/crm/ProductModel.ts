import { ValidationErrorInterface } from ".";
import { validate } from 'serendip-utility'
import { EntityModel } from "../EntityModel";


export class ProductModel extends EntityModel {

    constructor(model?: ProductModel) {

        super(model);

        this.name = model.name;
        this.assurance = model.assurance;
        this.price = model.price;
        this.priceCurrency = model.priceCurrency;


    }

    static async validate(model: ProductModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];
        if (errs && errs.length > 0)
            throw errs;
    }


    name: string;

    price: number;

    priceCurrency: string;

    assurance: any;



}