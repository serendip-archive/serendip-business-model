import { ReportFieldQueryInterface } from ".";

export interface ReportFieldInterface {
  enabled?: boolean;
  name?: string;
  method?: string;
  methodInputs?: any;
  label?: string;
  template?: string;
  templateInputs?: any;
  templateInputsForm?: string;

  queries?: ReportFieldQueryInterface[];
}
