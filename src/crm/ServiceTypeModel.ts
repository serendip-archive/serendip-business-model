import { ValidationErrorInterface } from '..';
import { EntityModel } from '../EntityModel';

export class ServiceTypeModel extends EntityModel {

    static async validate(model: ServiceTypeModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];

        // if (!Validator.isLength(model.name, 3, 64))
        //     errs.push({ property: 'name', type: 'length' })

        if (errs && errs.length > 0)
            throw errs;

    }

    constructor(model: ServiceTypeModel) {

        super(model);

        this.name = model.name;
        this.price = model.price;
        this.priceCurrency = model.priceCurrency;
        this.period = model.period;
        this.periodUnit = model.periodUnit;
        this.periodAbsoluteExpiration = model.periodAbsoluteExpiration;
        this.periodRelevantExpiration = model.periodRelevantExpiration;

    }

    name: string;
    price: number;
    priceCurrency: string;
    period: number;
    periodUnit: string;
    periodAbsoluteExpiration: Date;
    periodRelevantExpiration: Date;

}