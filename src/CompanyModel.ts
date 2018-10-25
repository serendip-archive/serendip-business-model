import { ContactModel } from ".";
import { CrmModelInterface, ValidationErrorInterface } from ".";
import { validate } from 'serendip-utility'

export class CompanyModel implements CrmModelInterface {

    constructor(model?: CompanyModel) {

        if (model) {
            if (model._id)
                this._id = model._id;

            this.contacts = model.contacts;
            this.crm = model.crm;
            this.name = model.name;
            this.type = model.type;

            this.oid = model.oid;

        } else {

            this._id = '';
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

    _id?: string;

    crm: string;


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