import { ReportFieldInterface } from ".";
import { EntityModel } from "..";

export interface ReportInterface extends EntityModel {
  name?: string;
  label?: string;
  entityName?: string;
  fields?: ReportFieldInterface[];
  count?: number;
  data?: any[];

  offline?: boolean;
}
