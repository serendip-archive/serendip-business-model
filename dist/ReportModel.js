"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReportModel = /** @class */ (function () {
    function ReportModel(model) {
        this.fields = model.fields;
        this._business = model._business;
        this.entityName = model.entityName;
        this.createDate = model.createDate || new Date();
        this.data = model.data || [];
        this.user = model.user;
        this.client = model.client;
        this.count = model.count;
        this.name = model.name;
        this.label = model.label;
    }
    return ReportModel;
}());
exports.ReportModel = ReportModel;
