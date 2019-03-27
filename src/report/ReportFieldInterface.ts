import { FieldQueryInterface } from ".";

export interface ReportFieldInterface {
  // report should include this field?
  enabled?: boolean;

  // Field name in db
  name?: string;

  analytical?: boolean;
  //! this property will be provided by tech user
  method?: string;
  //! this property will be provided by tech user
  methodOptions?: any;

  indexing? : boolean;
  label?: string;
  link?: string;
  template?: {
    component: string;
    inputs?: any;
    formName?: string;
    formId?: string;
  };

  type?: "date" | "string" | "number" | string;

  queries?: FieldQueryInterface[];
}
