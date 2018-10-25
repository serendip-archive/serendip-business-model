"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactAddressModel = /** @class */ (function () {
    function ContactAddressModel(model) {
        if (model) {
            this.city = model.city;
            this.state = model.state;
            this.country = model.country;
            this.postalCode = model.postalCode;
            this.text = model.text;
            this.geo = model.geo;
        }
    }
    return ContactAddressModel;
}());
exports.ContactAddressModel = ContactAddressModel;
