import { ContactModel } from ".";
import { ValidationErrorInterface } from "..";
import { validate } from 'serendip-utility'
import { EntityModel } from "../EntityModel";

export class CompanyModel extends EntityModel {

    constructor(model?: CompanyModel) {

        super(model);

        this._entity = 'company';

        if (model) {

            this.contacts = model.contacts;
            this.name = model.name;
            this.type = model.type;
            this.oid = model.oid;

        } else {

            this.name = '';
            this.type = [''];
            this.contacts = [
                {
                    name: "",
                    faxes: [''],
                    telephones: [''],
                    peoples: [],
                    address: {
                        text: '',
                        city: '',
                        state: '',
                        country: '',
                        postalCode: '',
                        geo: ''
                    }
                }
            ];

        }
    }


    static async validate(model: CompanyModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];

        if (!validate.isLength(model.name, 3, 64))
            errs.push({ property: 'name', type: 'length' })


        if (errs && errs.length > 0)
            throw errs;

    }

    oid?: string;


    name: string;

    /**
     * storing contact ways to company ex : headquarter , factory , ...
     */
    contacts: ContactModel[];



    /**
     * Provider , Partner , Costumer
     */
    type: string[];


}