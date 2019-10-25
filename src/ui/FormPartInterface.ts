export interface FormPartInterface {
  if?: string;
  templateName?: string;
  componentName?: string;
  propertyName?: string;
  propertyType?: "array" | "object" | "string" | "boolean" | "number";
  inputs?: any;

  formName?: string;
  formId?: string;

  label?: string;
  cssClass?: string;
  parts?: FormPartInterface[] | "clone-top-parts";
}
