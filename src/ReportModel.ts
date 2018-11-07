import { ReportFieldInterface } from "./ReportFieldInterface";
import { ReportQueryInterface } from "./ReportQueryInterface";

export class ReportModel {

        constructor(model: ReportModel) {

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

        _id?: string;

        count: number;

        name: string;

        fields: ReportFieldInterface[];

        queries: ReportQueryInterface[];

        entity: string;

        data: any[];

        createDate: Date;

        user?: string;

        client?: string;

}
