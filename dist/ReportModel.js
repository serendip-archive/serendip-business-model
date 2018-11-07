"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReportModel = /** @class */ (function () {
    function ReportModel(model) {
        this.fields = model.fields;
        this.queries = model.queries;
        this.entity = model.entity;
        this.createDate = model.createDate || new Date();
        this.data = model.data || [];
        this.user = model.user;
        this.client = model.client;
        this.count = model.count;
        this.name = model.name;
    }
    return ReportModel;
}());
exports.ReportModel = ReportModel;
