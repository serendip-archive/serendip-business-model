import { ValidationErrorInterface } from "./..";
import { validate } from 'serendip-utility'
export class ContactAddressModel {

    constructor(model?: ContactAddressModel) {

        if (model) {

            this.city = model.city;
            this.state = model.state;
            this.country = model.country;
            this.postalCode = model.postalCode;
            this.text = model.text;
            this.geo = model.geo;

        }
    }
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    text?: string;

    geo?: string;

    // static async validate(model: ContactAddressModel): Promise<ValidationErrorInterface[]> {

    // }
}