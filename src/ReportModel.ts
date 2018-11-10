import { ReportFieldInterface } from "./ReportFieldInterface";
import { ReportFieldQueryInterface } from "./ReportFieldQueryInterface";

export interface ReportInterface {
  _id?: string;
  name?: string;
  label?: string;
  entityName?: string;
  fields?: ReportFieldInterface[];
}
export class ReportModel implements ReportInterface {
  constructor(model: ReportModel) {
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
  _business: string;
  label: string;
  offline?: boolean;
  _id?: string;

  count: number;

  name: string;
  entityName: string;

  fields: ReportFieldInterface[];

  data: any[];

  createDate: Date;

  user?: string;

  client?: string;
}
