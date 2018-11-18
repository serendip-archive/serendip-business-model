import { ReportFieldQueryInterface } from ".";

export interface ReportFieldInterface {
  // report should include this field?
  enabled?: boolean;

  // Field name in db
  name?: string;

  //! this property will be provided by tech user
  method?: string;
  //! this property will be provided by tech user
  methodOptions?: any;
  label?: string;
  template?: string;
  templateInputs?: any;
  templateInputsForm?: string;

  queries?: ReportFieldQueryInterface[];
}
