"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactModel = /** @class */ (function () {
    // validate?(model: any): Promise<ValidationErrorInterface[]> {
    //     throw new Error("Method not implemented.");
    // }
    function ContactModel(model) {
        this.name = model.name;
        this.address = model.address;
        this.faxes = model.faxes;
        this.telephones = model.telephones;
        this.peoples = model.peoples;
    }
    return ContactModel;
}());
exports.ContactModel = ContactModel;
