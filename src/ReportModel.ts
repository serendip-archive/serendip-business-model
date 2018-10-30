import { ReportFieldInterface } from "./ReportFieldInterface";
import { ReportQueryInterface } from "./ReportQueryInterface";

export class ReportModel {

        _id?: string;

        fields: ReportFieldInterface[];

        queries: ReportQueryInterface[];

        entity: string;

        data: any[];

        createDate: Date;

        user?: string;
        
        client?: string;

}
