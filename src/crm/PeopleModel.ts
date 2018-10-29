import { ValidationErrorInterface } from ".";
import { ContactModel } from "./ContactModel";
import { ValueTypeInterface } from "../ValueTypeInterface";
import { EntityModel } from "../EntityModel";
export class PeopleModel extends EntityModel {


    constructor(model?: PeopleModel) {


        super(model);

        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.profilePicture = model.profilePicture;
        this.socials = model.socials;
        this.birthDate = model.birthDate;
        this.emails = model.emails;
        this.mobiles = model.mobiles;
        this.gender = model.gender;
        this.oid = model.oid;
        this.contacts = model.contacts;

    }


    static async validate(model: PeopleModel): Promise<void> {
        var errs: ValidationErrorInterface[] = [];
        if (errs && errs.length > 0)
            throw errs;
    }



    oid?: string;

    firstName: string;

    lastName: string;

    profilePicture: string;

    socials: ValueTypeInterface[];

    birthDate: number;

    mobiles: string[];

    emails: string[];

    gender: boolean;

    contacts?: ContactModel[];


}