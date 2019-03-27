export interface ReportFormatInterface {
  label?: string;
  method?: string;
  type?: string;
  // options for passing to format method
  options?: any;
  // id to find form for filling options
  formId?: string;
  // name to find form from forms.ts for filling options
  formName?: string;
  chart?: string;

  fields?: string[];
}
