import { ServiceModel, ProductModel } from ".";
import { ValidationErrorInterface } from ".";
import { validate } from 'serendip-utility'
import { EntityModel } from "../EntityModel";



export class ComplaintModel extends EntityModel {

    constructor(model?: ComplaintModel) {

        super(model);

        this.product = model.product;
        this.service = model.service;
        this.person = model.person;
        this.product = model.product;
        this.receivedAt = model.receivedAt;
        this.receiver = model.receiver;
        this.company = model.company;
        this.receivedAt = model.receivedAt || new Date();


    }


    service: string;

    product: string;

    company: string;

    person: string;

    receiver: string;

    receivedAt: Date;


    static async validate(model: ComplaintModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];


        if (errs && errs.length > 0)
            throw errs;

    }


}