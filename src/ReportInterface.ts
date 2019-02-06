import { ReportFieldInterface } from "./ReportFieldInterface";
import { EntityModel } from "./EntityModel";

export interface ReportFormatInterface {
  label?: string;

  method?: string;

  dataType?: "name-value" | "name-series";

  // options for passing to format method
  options?: any;

  // id to find form for filling options
  formId?: string;

  // name to find form from forms.ts for filling options
  formName?: string;

  charts?: string[];
}
export interface ReportInterface extends EntityModel {
  name?: string;
  label?: string;
  entityName?: string;
  fields?: ReportFieldInterface[];
  count?: number;
  data?: any[];

  offline?: boolean;
}
